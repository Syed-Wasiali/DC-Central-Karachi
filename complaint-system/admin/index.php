<?php
require dirname(__DIR__) . '/lib/bootstrap.php'; require __DIR__ . '/_layout.php';
$u = require_login();
$by = fn($col) => q("SELECT $col k, COUNT(*) n FROM complaints GROUP BY $col ORDER BY n DESC")->fetchAll();
$total = (int)q('SELECT COUNT(*) n FROM complaints')->fetch()['n'];
$status = array_column($by('status'), 'n', 'k'); $cats = $by('category'); $subs = $by('subdivision');
$target = (int)cfg('response_target_hours', 48);
$overdue = (int)q("SELECT COUNT(*) n FROM complaints WHERE status IN ('new','assigned') AND created_at < ?", [date('Y-m-d H:i:s', time() - $target * 3600)])->fetch()['n'];
$week = q('SELECT substr(created_at,1,10) d, COUNT(*) n FROM complaints WHERE created_at >= ? GROUP BY substr(created_at,1,10)', [date('Y-m-d 00:00:00', strtotime('-13 days'))])->fetchAll();
$wk = array_column($week, 'n', 'd'); $days = []; for ($i = 13; $i >= 0; $i--) { $d = date('Y-m-d', strtotime("-$i days")); $days[$d] = (int)($wk[$d] ?? 0); }
$latest = q("SELECT * FROM complaints ORDER BY CASE priority WHEN 'urgent' THEN 0 ELSE 1 END, id DESC LIMIT 8")->fetchAll();
page_top('Dashboard', $u, 'dash');
$open = ($status['new'] ?? 0) + ($status['assigned'] ?? 0) + ($status['in-progress'] ?? 0);
?>
<div class="kpis">
 <a class="kpi" href="complaints.php"><span>Total</span><strong><?= $total ?></strong></a>
 <a class="kpi blue" href="complaints.php?status=new"><span>New</span><strong><?= (int)($status['new'] ?? 0) ?></strong></a>
 <a class="kpi amber" href="complaints.php?open=1"><span>Open</span><strong><?= $open ?></strong></a>
 <a class="kpi red" href="complaints.php?overdue=1"><span>Overdue (&gt;<?= $target ?>h)</span><strong><?= $overdue ?></strong></a>
 <a class="kpi green" href="complaints.php?status=resolved"><span>Resolved</span><strong><?= (int)($status['resolved'] ?? 0) + (int)($status['closed'] ?? 0) ?></strong></a>
</div>
<div class="grid2">
 <section class="card"><h2>Complaints in the last 14 days</h2><div class="bars"><?php $mx = max(1, max($days)); foreach ($days as $d => $n): ?><div class="bar" title="<?= h($d) ?>: <?= $n ?>"><i style="height:<?= round($n / $mx * 100) ?>%"></i><em><?= $n ?: '' ?></em><span><?= date('d', strtotime($d)) ?></span></div><?php endforeach; ?></div></section>
 <section class="card"><h2>By sub-division</h2><?php $mx = max(1, (int)($subs[0]['n'] ?? 1)); foreach ($subs as $r): ?><a class="hbar" href="complaints.php?subdivision=<?= urlencode($r['k']) ?>"><span><?= h($r['k']) ?></span><i style="width:<?= round($r['n'] / $mx * 100) ?>%"></i><b><?= (int)$r['n'] ?></b></a><?php endforeach; if (!$subs) echo '<p class="muted">No complaints yet.</p>'; ?></section>
</div>
<section class="card"><h2>By category</h2><div class="catgrid"><?php foreach ($cats as $r): ?><a href="complaints.php?category=<?= urlencode($r['k']) ?>"><i class="bi <?= h(DC_CATEGORIES[$r['k']]['icon'] ?? 'bi-dot') ?>"></i><span><?= h(cat_label($r['k'])) ?></span><b><?= (int)$r['n'] ?></b></a><?php endforeach; if (!$cats) echo '<p class="muted">No complaints yet.</p>'; ?></div></section>
<section class="card"><h2>Latest and urgent</h2><?php include __DIR__ . '/_table.php'; render_table($latest); ?></section>
<?php page_end();
