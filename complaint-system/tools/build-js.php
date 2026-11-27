<?php
// Regenerates ../complaint-categories.js for the website from lib/categories.php (run: php complaint-system/tools/build-js.php)
require dirname(__DIR__) . '/lib/categories.php';
$cats = [];
foreach (DC_CATEGORIES as $k => $c) $cats[] = ['key' => $k, 'label' => $c['label'], 'icon' => $c['icon'], 'office' => $c['office'], 'kw' => $c['kw']];
$js = "// Generated from complaint-system/lib/categories.php – do not edit by hand.\nwindow.DC_COMPLAINT_CATS = " . json_encode($cats, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES) . ";\nwindow.DC_COMPLAINT_URGENT = " . json_encode(DC_URGENT_WORDS, JSON_UNESCAPED_UNICODE) . ";\nwindow.DC_COMPLAINT_SUBDIVISIONS = " . json_encode(DC_SUBDIVISIONS) . ";\n";
file_put_contents(dirname(__DIR__, 2) . '/complaint-categories.js', $js);
echo "wrote complaint-categories.js (" . count($cats) . " categories)\n";
