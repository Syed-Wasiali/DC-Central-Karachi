<?php
function render_table(array $rows): void {
  if (!$rows) { echo '<p class="muted">No complaints match.</p>'; return; }
  echo '<div class="table-wrap"><table class="tbl"><thead><tr><th>Ref</th><th>Received</th><th>Category</th><th>Area</th><th>Citizen</th><th>Priority</th><th>Status</th></tr></thead><tbody>';
  foreach ($rows as $c) {
    echo '<tr onclick="location=\'view.php?id=' . (int)$c['id'] . '\'"><td><a href="view.php?id=' . (int)$c['id'] . '"><strong>' . h($c['ref']) . '</strong></a></td><td>' . h(date('d M, g:i a', strtotime($c['created_at']))) . '</td><td><i class="bi ' . h(DC_CATEGORIES[$c['category']]['icon'] ?? '') . '"></i> ' . h(cat_label($c['category'])) . '<div class="sub">' . h(mb_strimwidth($c['title'] ?: $c['description'], 0, 70, '…')) . '</div></td><td>' . h($c['subdivision']) . ($c['uc'] ? '<div class="sub">' . h($c['uc']) . '</div>' : '') . '</td><td>' . h($c['name']) . '<div class="sub">' . h($c['phone']) . '</div></td><td>' . prio_pill($c['priority']) . '</td><td>' . status_pill($c['status']) . '</td></tr>';
  }
  echo '</tbody></table></div>';
}
