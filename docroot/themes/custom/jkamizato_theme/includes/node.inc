<?php

/**
 * @file
 * Theme and preprocess functions for nodes.
 */

/**
 *
 */
function jkamizato_theme_preprocess_node(&$variables) {
  $variables['is_front'] = \Drupal::service('path.matcher')->isFrontPage();
}
