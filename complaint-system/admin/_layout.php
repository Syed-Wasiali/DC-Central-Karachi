<?php
function page_top(string $title, array $u, string $active = ''): void { ?>
<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title><?= h($title) ?> – Complaints CRM</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"><link rel="stylesheet" href="assets/admin.css"></head><body>
<aside class="side"><div class="brand"><i class="bi bi-shield-check"></i><div><strong>DC Central</strong><span>Complaints CRM</span></div></div>
<nav><a href="index.php" class="<?= $active === 'dash' ? 'on' : '' ?>"><i class="bi bi-speedometer2"></i> Dashboard</a>
<a href="complaints.php" class="<?= $active === 'list' ? 'on' : '' ?>"><i class="bi bi-inbox"></i> All complaints</a>
<a href="complaints.php?status=new" class="<?= $active === 'new' ? 'on' : '' ?>"><i class="bi bi-envelope-exclamation"></i> New</a>
<a href="complaints.php?mine=1" class="<?= $active === 'mine' ? 'on' : '' ?>"><i class="bi bi-person-check"></i> Assigned to me</a>
<a href="complaints.php?priority=urgent" class="<?= $active === 'urgent' ? 'on' : '' ?>"><i class="bi bi-exclamation-triangle"></i> Urgent</a>
<?php if ($u['role'] === 'admin'): ?><a href="users.php" class="<?= $active === 'users' ? 'on' : '' ?>"><i class="bi bi-people"></i> Staff</a><?php endif; ?>
</nav><div class="me"><i class="bi bi-person-circle"></i> <?= h($u['name']) ?><a href="logout.php">Sign out</a></div></aside>
<main class="content"><h1><?= h($title) ?></h1>
<?php }
function page_end(): void { echo '</main></body></html>'; }
function status_pill(string $s): string { $c = DC_STATUSES[$s]['color'] ?? '#555'; return '<span class="pill" style="background:' . $c . '1a;color:' . $c . '">' . h(status_label($s)) . '</span>'; }
function prio_pill(string $p): string { $c = ['urgent' => '#dc2626', 'high' => '#d97706', 'normal' => '#4b5563', 'low' => '#9ca3af'][$p] ?? '#555'; return '<span class="pill" style="background:' . $c . '1a;color:' . $c . '">' . h(DC_PRIORITIES[$p] ?? $p) . '</span>'; }
