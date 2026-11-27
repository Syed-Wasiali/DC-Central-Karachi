<?php
// Database tables. Works on MySQL and SQLite.
function dc_schema(bool $sqlite): array {
  $id = $sqlite ? 'INTEGER PRIMARY KEY AUTOINCREMENT' : 'INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY';
  $txt = $sqlite ? 'TEXT' : 'TEXT';
  $v = fn($n) => $sqlite ? 'TEXT' : "VARCHAR($n)";
  $eng = $sqlite ? '' : ' ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci';
  return [
    "CREATE TABLE IF NOT EXISTS users (id $id, name {$v(120)} NOT NULL, email {$v(190)} NOT NULL UNIQUE, password_hash {$v(255)} NOT NULL, role {$v(20)} NOT NULL DEFAULT 'staff', active INTEGER NOT NULL DEFAULT 1, created_at {$v(19)} NOT NULL, last_login {$v(19)} NULL)$eng",
    "CREATE TABLE IF NOT EXISTS complaints (id $id, ref {$v(24)} NULL UNIQUE, created_at {$v(19)} NOT NULL, updated_at {$v(19)} NOT NULL, name {$v(120)} NOT NULL, cnic {$v(20)} NULL, phone {$v(20)} NOT NULL, email {$v(190)} NULL, subdivision {$v(40)} NOT NULL, uc {$v(120)} NULL, address {$v(300)} NOT NULL, category {$v(40)} NOT NULL, citizen_category {$v(40)} NOT NULL, suggested_category {$v(40)} NULL, office {$v(200)} NULL, priority {$v(10)} NOT NULL DEFAULT 'normal', status {$v(20)} NOT NULL DEFAULT 'new', assigned_to INTEGER NULL, title {$v(160)} NULL, description $txt NOT NULL, contact_pref {$v(20)} NULL, ip {$v(45)} NULL, source {$v(20)} NOT NULL DEFAULT 'website')$eng",
    "CREATE TABLE IF NOT EXISTS complaint_files (id $id, complaint_id INTEGER NOT NULL, path {$v(200)} NOT NULL, original {$v(200)} NULL, mime {$v(60)} NULL, size INTEGER NULL)$eng",
    "CREATE TABLE IF NOT EXISTS complaint_events (id $id, complaint_id INTEGER NOT NULL, created_at {$v(19)} NOT NULL, user_id INTEGER NULL, type {$v(20)} NOT NULL, from_val {$v(200)} NULL, to_val {$v(200)} NULL, note $txt NULL, is_public INTEGER NOT NULL DEFAULT 0)$eng",
    "CREATE INDEX " . ($sqlite ? 'IF NOT EXISTS ' : '') . "idx_c_status ON complaints (status)",
    "CREATE INDEX " . ($sqlite ? 'IF NOT EXISTS ' : '') . "idx_c_cat ON complaints (category)",
    "CREATE INDEX " . ($sqlite ? 'IF NOT EXISTS ' : '') . "idx_c_created ON complaints (created_at)",
    "CREATE INDEX " . ($sqlite ? 'IF NOT EXISTS ' : '') . "idx_e_c ON complaint_events (complaint_id)",
  ];
}
