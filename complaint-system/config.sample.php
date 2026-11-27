<?php
// Copy this file to config.php and fill in your details. Never share config.php.
return [
  'site_name'   => 'District Central Karachi – Complaints',
  'base_url'    => 'https://complaints.example.com',        // where this system is installed (no trailing slash)
  'website_url' => 'https://www.example.com',               // the public website
  'allowed_origins' => ['https://www.example.com', 'https://example.com', 'https://syed-wasiali.github.io'],

  // Database: 'mysql' (recommended on hosting) or 'sqlite' (testing / small sites)
  'db' => [
    'driver' => 'mysql',
    'host' => 'localhost', 'name' => 'dc_complaints', 'user' => 'dc_user', 'pass' => 'CHANGE_ME',
    'sqlite_path' => __DIR__ . '/data/complaints.sqlite',
  ],

  // Who receives a copy of every new complaint (the complaints inbox)
  'notify_emails' => ['complaints@example.com'],
  'mail_from'     => 'no-reply@example.com',
  'mail_from_name'=> 'DC Central Complaints',
  'mail_log'      => false,
  // Recommended: send through a real mailbox (from your hosting's Email Accounts) so mail is not marked as spam.
  // Leave 'host' empty to use the server's built-in mail() instead.
  'smtp' => ['host' => '', 'port' => 465, 'secure' => 'ssl', 'user' => 'no-reply@example.com', 'pass' => ''],
  //   mail_from must be the same address as the SMTP user.   // true = also write every email to data/mail.log (useful for testing)

  'timezone' => 'Asia/Karachi',
  'max_uploads' => 3,
  'max_upload_mb' => 5,
  'rate_limit_per_hour' => 5,  // complaints allowed from one internet address per hour
  'response_target_hours' => 48,
];
