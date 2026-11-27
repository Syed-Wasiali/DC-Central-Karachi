<?php
require dirname(__DIR__) . '/lib/bootstrap.php'; require __DIR__ . '/_layout.php';
$u = require_admin(); $msg = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  check_csrf();
  if (($_POST['act'] ?? '') === 'add') {
    $n = trim($_POST['name'] ?? ''); $e = strtolower(trim($_POST['email'] ?? '')); $pw = $_POST['password'] ?? ''; $r = ($_POST['role'] ?? '') === 'admin' ? 'admin' : 'staff';
    if ($n === '' || !filter_var($e, FILTER_VALIDATE_EMAIL) || strlen($pw) < 10) $msg = 'Enter a name, valid email and a password of 10+ characters.';
    elseif (q('SELECT id FROM users WHERE email = ?', [$e])->fetch()) $msg = 'That email already has an account.';
    else { q('INSERT INTO users (name, email, password_hash, role, active, created_at) VALUES (?,?,?,?,1,?)', [$n, $e, password_hash($pw, PASSWORD_DEFAULT), $r, now()]); $msg = 'Account created.'; }
  } elseif (($_POST['act'] ?? '') === 'toggle' && (int)$_POST['id'] !== (int)$u['id']) {
    q('UPDATE users SET active = 1 - active WHERE id = ?', [(int)$_POST['id']]); $msg = 'Updated.';
  } elseif (($_POST['act'] ?? '') === 'password') {
    $pw = $_POST['password'] ?? ''; if (strlen($pw) < 10) $msg = 'Password must be 10+ characters.'; else { q('UPDATE users SET password_hash = ? WHERE id = ?', [password_hash($pw, PASSWORD_DEFAULT), (int)$_POST['id']]); $msg = 'Password changed.'; }
  }
}
$users = q('SELECT * FROM users ORDER BY active DESC, name')->fetchAll();
page_top('Staff accounts', $u, 'users');
if ($msg) echo '<p class="alert ok">' . h($msg) . '</p>'; ?>
<section class="card"><table class="tbl"><thead><tr><th>Name</th><th>Email</th><th>Role</th><th>Last sign-in</th><th></th></tr></thead><tbody>
<?php foreach ($users as $s): ?><tr><td><?= h($s['name']) ?><?= $s['active'] ? '' : ' <span class="pill">disabled</span>' ?></td><td><?= h($s['email']) ?></td><td><?= h($s['role']) ?></td><td><?= h($s['last_login'] ?: '–') ?></td><td class="actions">
<form method="post"><?= csrf_field() ?><input type="hidden" name="act" value="password"><input type="hidden" name="id" value="<?= (int)$s['id'] ?>"><input type="password" name="password" placeholder="New password" minlength="10"><button class="small">Set</button></form>
<?php if ((int)$s['id'] !== (int)$u['id']): ?><form method="post"><?= csrf_field() ?><input type="hidden" name="act" value="toggle"><input type="hidden" name="id" value="<?= (int)$s['id'] ?>"><button class="small light"><?= $s['active'] ? 'Disable' : 'Enable' ?></button></form><?php endif; ?></td></tr><?php endforeach; ?>
</tbody></table></section>
<form class="card narrow" method="post"><h2>Add a staff member</h2><?= csrf_field() ?><input type="hidden" name="act" value="add">
<label>Full name<input name="name" required></label><label>Email<input type="email" name="email" required></label><label>Password (10+ characters)<input type="password" name="password" minlength="10" required></label>
<label>Role<select name="role"><option value="staff">Staff – can handle complaints</option><option value="admin">Admin – can also manage staff</option></select></label><button>Add</button></form>
<?php page_end();
