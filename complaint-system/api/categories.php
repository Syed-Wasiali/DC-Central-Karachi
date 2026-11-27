<?php
// Category list for the website form.
require dirname(__DIR__) . '/lib/bootstrap.php';
cors();
json_out(['categories' => array_map(fn($k, $c) => ['key' => $k, 'label' => $c['label'], 'icon' => $c['icon']], array_keys(DC_CATEGORIES), DC_CATEGORIES), 'subdivisions' => DC_SUBDIVISIONS]);
