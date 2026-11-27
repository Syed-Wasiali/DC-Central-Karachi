<?php
require dirname(__DIR__) . '/lib/bootstrap.php'; require __DIR__ . '/_layout.php'; require __DIR__ . '/_table.php';
$u = require_login();
$w = []; $p = [];
$g = fn($k) => trim((string)($_GET[$k] ?? ''));
if ($g('status') !== '' && isset(DC_STATUSES[$g('status')])) { $w[] = 'status = ?'; $p[] = $g('status'); }
if ($g('open')) $w[] = "status IN ('new','assigned','in-progress')";
if ($g('category') !== '' && isset(DC_CATEGORIES[$g('category')])) { $w[] = 'category = ?'; $p[] = $g('category'); }
if ($g('subdivision') !== '') { $w[] = 'subdivision = ?'; $p[] = $g('subdivision'); }
if ($g('priority') !== '' && isset(DC_PRIORITIES[$g('priority')])) { $w[] = 'priority = ?'; $p[] = $g('priority'); }
if ($g('mine')) { $w[] = 'assigned_to = ?'; $p[] = $u['id']; }
if ($g('overdue')) { $w[] = "status IN ('new','assigned') AND created_at < ?"; $p[] = date('Y-m-d H:i:s', time() - (int)cfg('response_target_hours', 48) * 3600); }
if ($g('from') !== '') { $w[] = 'created_at >= ?'; $p[] = $g('from') . ' 00:00:00'; }
if ($g('to') !== '') { $w[] = 'created_at <= ?'; $p[] = $g('to') . ' 23:59:59'; }
if ($g('q') !== '') { $w[] = '(ref LIKE ? OR name LIKE ? OR phone LIKE ? OR address LIKE ? OR description LIKE ? OR uc LIKE ?)'; array_push($p, ...array_fill(0, 6, '%' . $g('q') . '%')); }
$where = $w ? 'WHERE ' . implode(' AND ', $w) : '';

if ($g('export') === 'csv') {
  header('Content-Type: text/csv; charset=utf-8'); header('Content-Disposition: attachment; filename="complaints-' . date('Y-m-d') . '.csv"');
  $o = fopen('php://output', 'w'); fwrite($o, "\xEF\xBB\xBF");
  fputcsv($o, ['Reference', 'Received', 'Status', 'Priority', 'Category', 'Routed to', 'Sub-division', 'UC', 'Location', 'Name', 'Mobile', 'Email', 'CNIC', 'Subject', 'Details', 'Assigned to', 'Last update']);
  $st = q("SELECT c.*, us.name aname FROM complaints c LEFT JOIN users us ON us.id = c.assigned_to $where ORDER BY c.id DESC", $p);
  while ($c = $st->fetch()) fputcsv($o, [$c['ref'], $c['created_at'], status_label($c['status']), $c['priority'], cat_label($c['category']), $c['office'], $c['subdivision'], $c['uc'], $c['address'], $c['name'], $c['phone'], $c['email'], $c['cnic'], $c['title'], $c['description'], $c['aname'], $c['updated_at']]);
  exit;
}
$per = 25; $page = max(1, (int)($_GET['page'] ?? 1));
$total = (int)q("SELECT COUNT(*) n FROM complaints $where", $p)->fetch()['n'];
$rows = q("SELECT * FROM complaints $where ORDER BY CASE priority WHEN 'urgent' THEN 0 ELSE 1 END, id DESC LIMIT $per OFFSET " . (($page - 1) * $per), $p)->fetchAll();
$active = $g('status') === 'new' ? 'new' : ($g('mine') ? 'mine' : ($g('priority') === 'urgent' ? 'urgent' : 'list'));
page_top('Complaints', $u, $active);
$sel = fn($name, $opts, $cur) => '<select name="' . $name . '"><option value="">' . ['status' => 'Any status', 'category' => 'Any category', 'subdivision' => 'Any sub-division', 'priority' => 'Any priority'][$name] . '</option>' . implode('', array_map(fn($k, $v) => '<option value="' . h($k) . '"' . ($cur === (string)$k ? ' selected' : '') . '>' . h($v) . '</option>', array_keys($opts), $opts)) . '</select>';
?>
<form class="filters card" method="get">
 <input type="search" name="q" value="<?= h($g('q')) ?>" placeholder="Search reference, name, mobile, area or text">
 <?= $sel('status', array_map(fn($s) => $s['label'], DC_STATUSES), $g('status')) ?>
 <?= $sel('category', array_map(fn($c) => $c['label'], DC_CATEGORIES), $g('category')) ?>
 <?= $sel('subdivision', array_combine(DC_SUBDIVISIONS, DC_SUBDIVISIONS), $g('subdivision')) ?>
 <?= $sel('priority', DC_PRIORITIES, $g('priority')) ?>
 <label class="d">From <input type="date" name="from" value="<?= h($g('from')) ?>"></label><label class="d">To <input type="date" name="to" value="<?= h($g('to')) ?>"></label>
 <?php if ($g('mine')): ?><input type="hidden" name="mine" value="1"><?php endif; ?>
 <button><i class="bi bi-funnel"></i> Filter</button><a class="btn-light" href="complaints.php">Clear</a>
 <a class="btn-light" href="?<?= h(http_build_query(array_merge($_GET, ['export' => 'csv']))) ?>"><i class="bi bi-download"></i> Export CSV</a>
</form>
<p class="muted"><?= $total ?> complaint<?= $total === 1 ? '' : 's' ?></p>
<section class="card"><?php render_table($rows); ?>
<?php $pages = (int)ceil($total / $per); if ($pages > 1): ?><div class="pager"><?php for ($i = 1; $i <= $pages; $i++): ?><a class="<?= $i === $page ? 'on' : '' ?>" href="?<?= h(http_build_query(array_merge($_GET, ['page' => $i]))) ?>"><?= $i ?></a><?php endfor; ?></div><?php endif; ?></section>
<?php page_end();
