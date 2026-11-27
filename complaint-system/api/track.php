<?php
// Public tracking: reference number + the mobile number used. Returns status and public updates only.
require dirname(__DIR__) . '/lib/bootstrap.php';
cors();
$ref = strtoupper(trim((string)($_REQUEST['ref'] ?? ''))); $phone = preg_replace('/[^0-9]/', '', (string)($_REQUEST['phone'] ?? ''));
if ($ref === '' || strlen($phone) < 10) json_out(['ok' => false, 'error' => 'Enter your reference number and mobile number.'], 422);
$c = q('SELECT * FROM complaints WHERE ref = ?', [$ref])->fetch();
if (!$c || substr(preg_replace('/[^0-9]/', '', $c['phone']), -10) !== substr($phone, -10)) json_out(['ok' => false, 'error' => 'No complaint found with that reference and mobile number.'], 404);
$ev = q('SELECT created_at, type, to_val, note FROM complaint_events WHERE complaint_id = ? AND is_public = 1 ORDER BY id', [$c['id']])->fetchAll();
json_out(['ok' => true, 'ref' => $c['ref'], 'status' => status_label($c['status']), 'status_key' => $c['status'], 'category' => cat_label($c['category']), 'office' => $c['office'], 'subdivision' => $c['subdivision'], 'submitted' => $c['created_at'], 'updated' => $c['updated_at'],
  'updates' => array_map(fn($e) => ['date' => $e['created_at'], 'text' => $e['note'] ?: ('Status: ' . status_label((string)$e['to_val']))], $ev)]);
