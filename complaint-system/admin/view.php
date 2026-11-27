<?php
require dirname(__DIR__) . '/lib/bootstrap.php'; require __DIR__ . '/_layout.php';
$u = require_login();
$id = (int)($_GET['id'] ?? 0);
$c = q('SELECT * FROM complaints WHERE id = ?', [$id])->fetch();
if (!$c) { http_response_code(404); exit('Complaint not found'); }
$staff = q('SELECT id, name FROM users WHERE active = 1 ORDER BY name')->fetchAll(); $staffName = array_column($staff, 'name', 'id');
$flash = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  check_csrf(); $changes = [];
  $ns = $_POST['status'] ?? $c['status']; $nc = $_POST['category'] ?? $c['category']; $np = $_POST['priority'] ?? $c['priority'];
  $na = ($_POST['assigned_to'] ?? '') === '' ? null : (int)$_POST['assigned_to'];
  if (isset(DC_STATUSES[$ns]) && $ns !== $c['status']) { add_event($id, 'status', $c['status'], $ns, '', in_array($ns, ['in-progress', 'resolved', 'closed', 'rejected'], true), (int)$u['id']); $changes['status'] = $ns; }
  if (isset(DC_CATEGORIES[$nc]) && $nc !== $c['category']) { add_event($id, 'category', $c['category'], $nc, 'Category changed to ' . cat_label($nc) . '.', false, (int)$u['id']); $changes['category'] = $nc; $changes['office'] = DC_CATEGORIES[$nc]['office']; }
  if (isset(DC_PRIORITIES[$np]) && $np !== $c['priority']) { add_event($id, 'priority', $c['priority'], $np, '', false, (int)$u['id']); $changes['priority'] = $np; }
  if ($na !== ($c['assigned_to'] === null ? null : (int)$c['assigned_to'])) { add_event($id, 'assign', (string)($staffName[$c['assigned_to']] ?? ''), (string)($staffName[$na] ?? 'nobody'), '', false, (int)$u['id']); $changes['assigned_to'] = $na; if ($na && $c['status'] === 'new' && !isset($changes['status'])) $changes['status'] = 'assigned'; }
  $note = trim((string)($_POST['note'] ?? '')); $public = !empty($_POST['public']);
  if ($note !== '') {
    add_event($id, $public ? 'reply' : 'note', null, null, mb_substr($note, 0, 4000), $public, (int)$u['id']);
    if ($public && $c['email'] && !empty($_POST['email_citizen'])) send_mail($c['email'], 'Update on your complaint ' . $c['ref'], mail_wrap('Update on ' . $c['ref'], '<p>Dear ' . h($c['name']) . ',</p><p>' . nl2br(h($note)) . '</p><p>Status: <strong>' . h(status_label($changes['status'] ?? $c['status'])) . '</strong></p>'));
  }
  if ($changes || $note !== '') {
    $changes['updated_at'] = now();
    q('UPDATE complaints SET ' . implode(', ', array_map(fn($k) => "$k = ?", array_keys($changes))) . ' WHERE id = ?', [...array_values($changes), $id]);
    header('Location: view.php?id=' . $id . '&saved=1'); exit;
  }
}
$files = q('SELECT * FROM complaint_files WHERE complaint_id = ?', [$id])->fetchAll();
$events = q('SELECT e.*, us.name uname FROM complaint_events e LEFT JOIN users us ON us.id = e.user_id WHERE complaint_id = ? ORDER BY e.id DESC', [$id])->fetchAll();
page_top($c['ref'] . ' · ' . cat_label($c['category']), $u, 'list');
$age = (time() - strtotime($c['created_at'])) / 3600;
?>
<?php if (isset($_GET['saved'])): ?><p class="alert ok">Saved.</p><?php endif; ?>
<p class="crumbs"><a href="complaints.php">← All complaints</a> · Received <?= h(date('l d M Y, g:i a', strtotime($c['created_at']))) ?> (<?= $age < 48 ? round($age) . ' hours ago' : round($age / 24) . ' days ago' ?>) <?= status_pill($c['status']) ?> <?= prio_pill($c['priority']) ?></p>
<div class="grid2 wide">
<div>
 <section class="card"><h2><?= h($c['title'] ?: 'Complaint details') ?></h2><p class="desc"><?= nl2br(h($c['description'])) ?></p>
 <?php if ($c['suggested_category'] && $c['suggested_category'] !== $c['category'] && $c['suggested_category'] !== 'other'): ?><p class="hint"><i class="bi bi-lightbulb"></i> The description suggests <strong><?= h(cat_label($c['suggested_category'])) ?></strong>. The citizen chose <strong><?= h(cat_label($c['citizen_category'])) ?></strong>.</p><?php endif; ?>
 <?php if ($files): ?><div class="files"><?php foreach ($files as $f): ?><a href="file.php?id=<?= (int)$f['id'] ?>" target="_blank"><?php if (str_starts_with((string)$f['mime'], 'image/')): ?><img src="file.php?id=<?= (int)$f['id'] ?>" alt=""><?php else: ?><i class="bi bi-file-earmark-pdf"></i><?php endif; ?><span><?= h($f['original']) ?></span></a><?php endforeach; ?></div><?php endif; ?>
 </section>
 <section class="card"><h2>Citizen and location</h2><dl class="dl">
  <dt>Name</dt><dd><?= h($c['name']) ?></dd><dt>Mobile</dt><dd><a href="tel:<?= h($c['phone']) ?>"><?= h($c['phone']) ?></a> · <a target="_blank" href="https://wa.me/<?= h(preg_replace('/^0/', '92', preg_replace('/\D/', '', $c['phone']))) ?>">WhatsApp</a> <span class="muted">(prefers <?= h($c['contact_pref']) ?>)</span></dd>
  <dt>Email</dt><dd><?= $c['email'] ? '<a href="mailto:' . h($c['email']) . '">' . h($c['email']) . '</a>' : '–' ?></dd><dt>CNIC</dt><dd><?= h($c['cnic'] ?: '–') ?></dd>
  <dt>Sub-division</dt><dd><?= h($c['subdivision']) ?></dd><dt>Union Committee</dt><dd><?= h($c['uc'] ?: '–') ?></dd>
  <dt>Location</dt><dd><?= h($c['address']) ?> <a target="_blank" href="https://www.google.com/maps/search/<?= urlencode($c['address'] . ', ' . $c['subdivision'] . ', Karachi') ?>">Map</a></dd>
  <dt>Route to</dt><dd><?= h($c['office']) ?></dd></dl></section>
</div>
<div>
 <form class="card" method="post"><h2>Update</h2><?= csrf_field() ?>
  <label>Status<select name="status"><?php foreach (DC_STATUSES as $k => $s): ?><option value="<?= $k ?>"<?= $k === $c['status'] ? ' selected' : '' ?>><?= h($s['label']) ?></option><?php endforeach; ?></select></label>
  <label>Category<select name="category"><?php foreach (DC_CATEGORIES as $k => $s): ?><option value="<?= $k ?>"<?= $k === $c['category'] ? ' selected' : '' ?>><?= h($s['label']) ?></option><?php endforeach; ?></select></label>
  <label>Priority<select name="priority"><?php foreach (DC_PRIORITIES as $k => $s): ?><option value="<?= $k ?>"<?= $k === $c['priority'] ? ' selected' : '' ?>><?= h($s) ?></option><?php endforeach; ?></select></label>
  <label>Assigned to<select name="assigned_to"><option value="">Nobody</option><?php foreach ($staff as $s): ?><option value="<?= (int)$s['id'] ?>"<?= (int)$s['id'] === (int)$c['assigned_to'] ? ' selected' : '' ?>><?= h($s['name']) ?></option><?php endforeach; ?></select></label>
  <label>Note<textarea name="note" rows="4" placeholder="Action taken, call made, forwarded to…"></textarea></label>
  <label class="chk"><input type="checkbox" name="public" value="1"> Show this note to the citizen (on tracking)</label>
  <?php if ($c['email']): ?><label class="chk"><input type="checkbox" name="email_citizen" value="1"> Also email it to the citizen</label><?php endif; ?>
  <button><i class="bi bi-check2"></i> Save</button></form>
 <section class="card"><h2>History</h2><ul class="timeline"><?php foreach ($events as $e): ?><li class="<?= $e['is_public'] ? 'pub' : '' ?>"><span class="when"><?= h(date('d M, g:i a', strtotime($e['created_at']))) ?> · <?= h($e['uname'] ?: 'System') ?><?= $e['is_public'] ? ' · <em>visible to citizen</em>' : '' ?></span>
  <?php if ($e['type'] === 'status'): ?>Status: <?= h(status_label((string)$e['from_val'])) ?> → <strong><?= h(status_label((string)$e['to_val'])) ?></strong>
  <?php elseif ($e['type'] === 'assign'): ?>Assigned to <strong><?= h($e['to_val']) ?></strong>
  <?php elseif ($e['type'] === 'priority'): ?>Priority: <?= h($e['from_val']) ?> → <strong><?= h($e['to_val']) ?></strong>
  <?php else: ?><?= nl2br(h($e['note'])) ?><?php endif; ?></li><?php endforeach; ?></ul></section>
</div></div>
<?php page_end();
