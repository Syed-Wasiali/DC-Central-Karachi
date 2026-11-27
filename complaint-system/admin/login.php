<?php
require dirname(__DIR__) . '/lib/bootstrap.php';
start_session(); $err = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  check_csrf();
  $_SESSION['tries'] = ($_SESSION['tries'] ?? 0) + 1;
  if ($_SESSION['tries'] > 8) { $err = 'Too many attempts. Close the browser and try again later.'; }
  else {
    $u = q('SELECT * FROM users WHERE email = ? AND active = 1', [strtolower(trim($_POST['email'] ?? ''))])->fetch();
    if ($u && password_verify($_POST['password'] ?? '', $u['password_hash'])) {
      session_regenerate_id(true); $_SESSION['uid'] = $u['id']; $_SESSION['tries'] = 0;
      q('UPDATE users SET last_login = ? WHERE id = ?', [now(), $u['id']]); header('Location: index.php'); exit;
    }
    $err = 'Email or password is incorrect.';
  }
}
?><!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Sign in – Complaints CRM</title><link rel="stylesheet" href="assets/admin.css"></head><body class="login-body">
<form class="login-card" method="post"><h1>Complaints CRM</h1><p>District Central Karachi – staff sign in</p>
<?php if ($err): ?><p class="alert err"><?= h($err) ?></p><?php endif; ?>
<?= csrf_field() ?><label>Email<input type="email" name="email" required autofocus></label><label>Password<input type="password" name="password" required></label><button>Sign in</button></form></body></html>
