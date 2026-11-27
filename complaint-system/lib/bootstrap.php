<?php
declare(strict_types=1);
require __DIR__ . '/categories.php';

$cfgFile = dirname(__DIR__) . '/config.php';
if (!is_file($cfgFile)) { http_response_code(500); exit('Not installed: copy config.sample.php to config.php and run install.php'); }
$CFG = require $cfgFile;
date_default_timezone_set($CFG['timezone'] ?? 'Asia/Karachi');
mb_internal_encoding('UTF-8');

function cfg(string $k, $d = null) { global $CFG; return $CFG[$k] ?? $d; }

function db(): PDO {
  static $pdo = null; if ($pdo) return $pdo;
  $c = cfg('db');
  if (($c['driver'] ?? 'mysql') === 'sqlite') {
    $pdo = new PDO('sqlite:' . $c['sqlite_path']);
    $pdo->exec('PRAGMA foreign_keys = ON');
  } else {
    $pdo = new PDO('mysql:host=' . $c['host'] . ';dbname=' . $c['name'] . ';charset=utf8mb4', $c['user'], $c['pass']);
  }
  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
  return $pdo;
}
function is_sqlite(): bool { return (cfg('db')['driver'] ?? 'mysql') === 'sqlite'; }
function now(): string { return date('Y-m-d H:i:s'); }
function h($s): string { return htmlspecialchars((string)$s, ENT_QUOTES, 'UTF-8'); }
function q(string $sql, array $p = []): PDOStatement { $st = db()->prepare($sql); $st->execute($p); return $st; }

function json_out(array $data, int $code = 200): void {
  http_response_code($code); header('Content-Type: application/json; charset=utf-8');
  echo json_encode($data, JSON_UNESCAPED_UNICODE); exit;
}
function cors(): void {
  $o = $_SERVER['HTTP_ORIGIN'] ?? '';
  if ($o && in_array($o, cfg('allowed_origins', []), true)) { header('Access-Control-Allow-Origin: ' . $o); header('Vary: Origin'); }
  header('Access-Control-Allow-Methods: GET, POST, OPTIONS'); header('Access-Control-Allow-Headers: Content-Type');
  if (($_SERVER['REQUEST_METHOD'] ?? '') === 'OPTIONS') { http_response_code(204); exit; }
}
function client_ip(): string { return substr($_SERVER['REMOTE_ADDR'] ?? '0.0.0.0', 0, 45); }

// ---------- sessions, login, CSRF (admin area) ----------
function start_session(): void {
  if (session_status() === PHP_SESSION_ACTIVE) return;
  session_name('dccrm');
  session_set_cookie_params(['httponly' => true, 'samesite' => 'Lax', 'secure' => !empty($_SERVER['HTTPS'])]);
  session_start();
}
function current_user(): ?array {
  start_session(); if (empty($_SESSION['uid'])) return null;
  static $u = false; if ($u === false) $u = q('SELECT * FROM users WHERE id = ? AND active = 1', [$_SESSION['uid']])->fetch() ?: null;
  return $u;
}
function require_login(): array { $u = current_user(); if (!$u) { header('Location: login.php'); exit; } return $u; }
function require_admin(): array { $u = require_login(); if ($u['role'] !== 'admin') { http_response_code(403); exit('Admins only'); } return $u; }
function csrf_token(): string { start_session(); if (empty($_SESSION['csrf'])) $_SESSION['csrf'] = bin2hex(random_bytes(16)); return $_SESSION['csrf']; }
function csrf_field(): string { return '<input type="hidden" name="csrf" value="' . csrf_token() . '">'; }
function check_csrf(): void { start_session(); if (!hash_equals($_SESSION['csrf'] ?? '', $_POST['csrf'] ?? '')) { http_response_code(400); exit('Session expired. Go back and try again.'); } }

// ---------- helpers ----------
function add_event(int $cid, string $type, ?string $from, ?string $to, string $note = '', bool $public = false, ?int $uid = null): void {
  q('INSERT INTO complaint_events (complaint_id, created_at, user_id, type, from_val, to_val, note, is_public) VALUES (?,?,?,?,?,?,?,?)',
    [$cid, now(), $uid, $type, $from, $to, $note, $public ? 1 : 0]);
}
function cat_label(string $k): string { return DC_CATEGORIES[$k]['label'] ?? $k; }
function status_label(string $k): string { return DC_STATUSES[$k]['label'] ?? $k; }

// ---------- email ----------
function send_mail(string $to, string $subject, string $html): bool {
  $from = cfg('mail_from'); $name = cfg('mail_from_name', 'Complaints');
  if (cfg('mail_log')) @file_put_contents(dirname(__DIR__) . '/data/mail.log', '[' . now() . "] TO: $to | $subject\n" . strip_tags(str_replace(['<br>', '</p>', '</tr>'], "\n", $html)) . "\n-----\n", FILE_APPEND);
  $smtp = cfg('smtp', []);
  if (!empty($smtp['host'])) return smtp_send($smtp, $from, $name, $to, $subject, $html);
  $headers = "MIME-Version: 1.0\r\nContent-Type: text/html; charset=UTF-8\r\nFrom: =?UTF-8?B?" . base64_encode($name) . "?= <$from>\r\nReply-To: $from\r\n";
  return @mail($to, '=?UTF-8?B?' . base64_encode($subject) . '?=', $html, $headers);
}
// Minimal SMTP client (SSL on 465 or STARTTLS on 587) so mail is sent through a real mailbox and not marked as spam.
function smtp_send(array $s, string $from, string $name, string $to, string $subject, string $html): bool {
  $port = (int)($s['port'] ?? 465); $secure = $s['secure'] ?? ($port === 465 ? 'ssl' : 'tls');
  $fp = @stream_socket_client(($secure === 'ssl' ? 'ssl://' : 'tcp://') . $s['host'] . ':' . $port, $en, $es, 15);
  if (!$fp) { error_log("SMTP connect failed: $es"); return false; }
  stream_set_timeout($fp, 15);
  $read = function () use ($fp) { $d = ''; while (($l = fgets($fp, 515)) !== false) { $d .= $l; if (isset($l[3]) && $l[3] === ' ') break; } return $d; };
  $cmd = function (string $c, array $ok) use ($fp, $read) { fwrite($fp, $c . "\r\n"); $r = $read(); if (!in_array((int)substr($r, 0, 3), $ok, true)) throw new RuntimeException(trim($r)); return $r; };
  try {
    $read(); $host = parse_url((string)cfg('base_url'), PHP_URL_HOST) ?: 'localhost';
    $cmd("EHLO $host", [250]);
    if ($secure === 'tls') { $cmd('STARTTLS', [220]); stream_socket_enable_crypto($fp, true, STREAM_CRYPTO_METHOD_TLS_CLIENT); $cmd("EHLO $host", [250]); }
    $cmd('AUTH LOGIN', [334]); $cmd(base64_encode($s['user']), [334]); $cmd(base64_encode($s['pass']), [235]);
    $cmd("MAIL FROM:<$from>", [250]); $cmd("RCPT TO:<$to>", [250, 251]); $cmd('DATA', [354]);
    $msg = 'Date: ' . date('r') . "\r\nFrom: =?UTF-8?B?" . base64_encode($name) . "?= <$from>\r\nTo: <$to>\r\nSubject: =?UTF-8?B?" . base64_encode($subject) . "?=\r\nMIME-Version: 1.0\r\nContent-Type: text/html; charset=UTF-8\r\nContent-Transfer-Encoding: base64\r\nMessage-ID: <" . bin2hex(random_bytes(8)) . '@' . $host . ">\r\n\r\n" . chunk_split(base64_encode($html));
    $cmd($msg . "\r\n.", [250]); $cmd('QUIT', [221]); fclose($fp); return true;
  } catch (Throwable $e) { error_log('SMTP error: ' . $e->getMessage()); @fclose($fp); return false; }
}
function mail_wrap(string $title, string $body): string {
  return '<div style="font-family:Arial,sans-serif;max-width:640px;margin:auto;border:1px solid #dfe9e3;border-radius:10px;overflow:hidden">'
    . '<div style="background:#0b5d3b;color:#fff;padding:16px 20px;font-size:18px;font-weight:bold">' . h($title) . '</div>'
    . '<div style="padding:20px;color:#1d2b24;font-size:14px;line-height:1.6">' . $body . '</div>'
    . '<div style="background:#f3f7f5;padding:12px 20px;font-size:12px;color:#667">Deputy Commissioner Office, District Central Karachi · Sector 15-A/1, Buffer Zone</div></div>';
}
