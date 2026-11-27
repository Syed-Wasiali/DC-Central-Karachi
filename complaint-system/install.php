<?php
// One-time setup: creates the tables and the first admin account. DELETE THIS FILE after use.
require __DIR__ . '/lib/bootstrap.php';
require __DIR__ . '/lib/schema.php';
$msg = ''; $done = false;
$hasUsers = false;
try { foreach (dc_schema(is_sqlite()) as $sql) { try { db()->exec($sql); } catch (PDOException $e) { if (stripos($e->getMessage(), 'Duplicate key name') === false && stripos($e->getMessage(), 'already exists') === false) throw $e; } }
  $hasUsers = (int)q('SELECT COUNT(*) c FROM users')->fetch()['c'] > 0;
} catch (Throwable $e) { $msg = 'Database error: ' . $e->getMessage(); }
if (!$msg && !$hasUsers && $_SERVER['REQUEST_METHOD'] === 'POST') {
  $name = trim($_POST['name'] ?? ''); $email = trim($_POST['email'] ?? ''); $pw = $_POST['password'] ?? '';
  if ($name === '' || !filter_var($email, FILTER_VALIDATE_EMAIL) || strlen($pw) < 10) $msg = 'Enter a name, a valid email and a password of at least 10 characters.';
  else { q('INSERT INTO users (name, email, password_hash, role, active, created_at) VALUES (?,?,?,?,1,?)', [$name, strtolower($email), password_hash($pw, PASSWORD_DEFAULT), 'admin', now()]); $done = true; }
}
?><!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Install – Complaints</title><link rel="stylesheet" href="admin/assets/admin.css"></head><body class="login-body"><div class="login-card">
<h1>Complaint system setup</h1>
<?php if ($msg): ?><p class="alert err"><?= h($msg) ?></p><?php endif; ?>
<?php if ($done || $hasUsers): ?><p class="alert ok">Setup is complete. <strong>Delete install.php from the server now</strong>, then <a href="admin/login.php">sign in to the CRM</a>.</p>
<?php elseif (!$msg || $_SERVER['REQUEST_METHOD'] === 'POST'): ?><p>The database tables are ready. Create the first administrator account:</p>
<form method="post"><label>Full name<input name="name" required></label><label>Email<input type="email" name="email" required></label><label>Password (10+ characters)<input type="password" name="password" minlength="10" required></label><button>Create admin</button></form><?php endif; ?>
</div></body></html>
