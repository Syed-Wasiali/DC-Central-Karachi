<?php
// Serves complaint attachments to signed-in staff only.
require dirname(__DIR__) . '/lib/bootstrap.php';
require_login();
$f = q('SELECT * FROM complaint_files WHERE id = ?', [(int)($_GET['id'] ?? 0)])->fetch();
$path = $f ? realpath(dirname(__DIR__) . '/uploads/' . $f['path']) : false;
if (!$path || !str_starts_with($path, realpath(dirname(__DIR__) . '/uploads'))) { http_response_code(404); exit; }
header('Content-Type: ' . $f['mime']); header('Content-Length: ' . filesize($path)); header('X-Content-Type-Options: nosniff'); readfile($path);
