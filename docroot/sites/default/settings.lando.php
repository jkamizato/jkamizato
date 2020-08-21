<?php

$info = json_decode(getenv('LANDO_INFO'), TRUE);

$databases = array(
  'default' => array(
    'default' => array(
      'database' => $info['database']['creds']['database'],
      'username' => $info['database']['creds']['user'],
      'password' => $info['database']['creds']['password'],
      'host' => $info['database']['internal_connection']['host'],
      'port' => $info['database']['internal_connection']['port'],
      'driver' => 'mysql',
      'prefix' => '',
      'collation' => 'utf8mb4_general_ci',
    ),
  ),
);

// This will prevent Drupal from setting read-only permissions on sites/default.
$settings['skip_permissions_hardening'] = TRUE;

// This will ensure the site can only be accessed through the intended host
// names. Additional host patterns can be added for custom configurations.
$settings['trusted_host_patterns'] = ['.*'];

$config['environment_indicator.indicator']['name'] = 'Lando';
$config['environment_indicator.indicator']['bg_color'] = '#ed3f7a';
$config['environment_indicator.indicator']['fg_color'] = '#fff';

$settings['container_yamls'][] = DRUPAL_ROOT . '/sites/development.services.yml';

$settings['config_sync_directory'] = 'config/sync';
