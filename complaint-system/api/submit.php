<?php
// Receives a complaint from the website form (multipart POST) and returns JSON with the reference number.
require dirname(__DIR__) . '/lib/bootstrap.php';
cors();
if ($_SERVER['REQUEST_METHOD'] !== 'POST') json_out(['ok' => false, 'error' => 'Use POST'], 405);
if (!empty($_POST['website'])) json_out(['ok' => true, 'ref' => 'DCC-0']); // honeypot: bots fill hidden field

$f = fn($k, $max) => mb_substr(trim((string)($_POST[$k] ?? '')), 0, $max);
$name = $f('name', 120); $phone = preg_replace('/[^0-9+]/', '', $f('phone', 20)); $email = $f('email', 190);
$cnic = preg_replace('/[^0-9-]/', '', $f('cnic', 20)); $sub = $f('subdivision', 40); $uc = $f('uc', 120);
$address = $f('address', 300); $cat = $f('category', 40); $desc = $f('description', 5000); $title = $f('title', 160);
$pref = in_array($_POST['contact_pref'] ?? '', ['call', 'whatsapp', 'email', 'sms'], true) ? $_POST['contact_pref'] : 'call';

$err = [];
if (mb_strlen($name) < 3) $err['name'] = 'Please enter your full name.';
if (!preg_match('/^(\+92|0)3\d{9}$/', $phone)) $err['phone'] = 'Enter a Pakistani mobile number, e.g. 03001234567.';
if ($email !== '' && !filter_var($email, FILTER_VALIDATE_EMAIL)) $err['email'] = 'Email address is not valid.';
if ($cnic !== '' && !preg_match('/^\d{5}-?\d{7}-?\d$/', $cnic)) $err['cnic'] = 'CNIC should be 13 digits, e.g. 42101-1234567-1.';
if (!in_array($sub, DC_SUBDIVISIONS, true)) $err['subdivision'] = 'Choose your sub-division.';
if (mb_strlen($address) < 5) $err['address'] = 'Please give the street, block or landmark.';
if (!isset(DC_CATEGORIES[$cat])) $err['category'] = 'Choose what the complaint is about.';
if (mb_strlen($desc) < 15) $err['description'] = 'Please describe the problem (at least 15 characters).';
if (empty($_POST['consent'])) $err['consent'] = 'Please confirm the information is correct.';
if ($err) json_out(['ok' => false, 'errors' => $err], 422);

// rate limit per internet address
$limit = (int)cfg('rate_limit_per_hour', 5);
$recent = (int)q('SELECT COUNT(*) c FROM complaints WHERE ip = ? AND created_at >= ?', [client_ip(), date('Y-m-d H:i:s', time() - 3600)])->fetch()['c'];
if ($recent >= $limit) json_out(['ok' => false, 'error' => 'Too many complaints from this connection in the last hour. Please try again later or call (021) 99260049.'], 429);

// check / suggest category from the text; flag urgent complaints
[$suggest, $score] = dc_classify($title . ' ' . $desc);
$final = $cat;
if ($cat === 'other' && $suggest !== 'other' && $score >= 2) $final = $suggest; // citizen chose "Other" but text clearly matches a category
$priority = dc_is_urgent($title . ' ' . $desc) ? 'urgent' : 'normal';
$office = DC_CATEGORIES[$final]['office'];

// uploads (images or PDF)
$files = [];
if (!empty($_FILES['photos']['name'][0])) {
  $max = (int)cfg('max_uploads', 3); $maxB = (int)cfg('max_upload_mb', 5) * 1048576;
  $ok = ['image/jpeg' => 'jpg', 'image/png' => 'png', 'image/webp' => 'webp', 'application/pdf' => 'pdf'];
  $fi = new finfo(FILEINFO_MIME_TYPE);
  foreach ($_FILES['photos']['tmp_name'] as $i => $tmp) {
    if ($i >= $max) break;
    if (($_FILES['photos']['error'][$i] ?? 1) !== UPLOAD_ERR_OK || !is_uploaded_file($tmp)) continue;
    if ($_FILES['photos']['size'][$i] > $maxB) json_out(['ok' => false, 'errors' => ['photos' => 'Each file must be under ' . cfg('max_upload_mb', 5) . ' MB.']], 422);
    $mime = $fi->file($tmp);
    if (!isset($ok[$mime])) json_out(['ok' => false, 'errors' => ['photos' => 'Only photos (JPG, PNG, WEBP) or PDF files are allowed.']], 422);
    $dir = dirname(__DIR__) . '/uploads/' . date('Y/m'); if (!is_dir($dir)) mkdir($dir, 0755, true);
    $fn = bin2hex(random_bytes(12)) . '.' . $ok[$mime];
    if (move_uploaded_file($tmp, "$dir/$fn")) $files[] = [date('Y/m') . "/$fn", mb_substr($_FILES['photos']['name'][$i], 0, 200), $mime, (int)$_FILES['photos']['size'][$i]];
  }
}

$pdo = db(); $pdo->beginTransaction();
q('INSERT INTO complaints (created_at, updated_at, name, cnic, phone, email, subdivision, uc, address, category, citizen_category, suggested_category, office, priority, status, title, description, contact_pref, ip, source) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
  [now(), now(), $name, $cnic ?: null, $phone, $email ?: null, $sub, $uc ?: null, $address, $final, $cat, $suggest, $office, $priority, 'new', $title ?: null, $desc, $pref, client_ip(), 'website']);
$id = (int)$pdo->lastInsertId();
$ref = 'DCC-' . date('y') . '-' . str_pad((string)$id, 5, '0', STR_PAD_LEFT);
q('UPDATE complaints SET ref = ? WHERE id = ?', [$ref, $id]);
foreach ($files as [$p, $o, $m, $s]) q('INSERT INTO complaint_files (complaint_id, path, original, mime, size) VALUES (?,?,?,?,?)', [$id, $p, $o, $m, $s]);
add_event($id, 'created', null, 'new', 'Complaint received from the website.' . ($final !== $cat ? ' Category set to ' . cat_label($final) . ' from the description.' : ''), true);
$pdo->commit();

// email the complaints inbox
$rows = [['Reference', $ref], ['Category', cat_label($final) . ($suggest !== $final && $suggest !== 'other' ? ' (description suggests: ' . cat_label($suggest) . ')' : '')], ['Priority', DC_PRIORITIES[$priority]], ['Route to', $office], ['Name', $name], ['Mobile', $phone . ' (prefers ' . $pref . ')'], ['Email', $email ?: '–'], ['CNIC', $cnic ?: '–'], ['Sub-division', $sub . ($uc ? ' – ' . $uc : '')], ['Location', $address], ['Subject', $title ?: '–'], ['Details', nl2br(h($desc))], ['Attachments', count($files) . ' file(s)']];
$tbl = '<table style="width:100%;border-collapse:collapse">' . implode('', array_map(fn($r) => '<tr><td style="padding:6px 8px;border-bottom:1px solid #eee;color:#667;width:130px;vertical-align:top">' . h($r[0]) . '</td><td style="padding:6px 8px;border-bottom:1px solid #eee">' . ($r[0] === 'Details' ? $r[1] : h($r[1])) . '</td></tr>', $rows)) . '</table>';
$link = rtrim((string)cfg('base_url'), '/') . '/admin/view.php?id=' . $id;
foreach (cfg('notify_emails', []) as $to) send_mail($to, ($priority === 'urgent' ? '[URGENT] ' : '') . "New complaint $ref – " . cat_label($final) . " – $sub", mail_wrap("New complaint $ref", $tbl . '<p style="margin-top:16px"><a href="' . h($link) . '" style="background:#0b5d3b;color:#fff;padding:10px 16px;border-radius:6px;text-decoration:none">Open in CRM</a></p>'));
if ($email) send_mail($email, "Your complaint $ref has been received", mail_wrap('Complaint received', '<p>Dear ' . h($name) . ',</p><p>Thank you. Your complaint about <strong>' . h(cat_label($final)) . '</strong> has been registered with the District Administration Central.</p><p style="font-size:18px">Reference number: <strong>' . h($ref) . '</strong></p><p>We aim to respond within ' . (int)cfg('response_target_hours', 48) . ' working hours. You can track it on the website with your reference number and mobile number.</p>'));

json_out(['ok' => true, 'ref' => $ref, 'category' => cat_label($final), 'office' => $office, 'priority' => $priority]);
