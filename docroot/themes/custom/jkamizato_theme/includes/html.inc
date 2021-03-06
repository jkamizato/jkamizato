<?php

/**
 * @file
 * Theme and preprocess functions for html wrapper.
 */

use Drupal\node\NodeInterface;

/**
 *
 */
function jkamizato_theme_preprocess_html(&$variables) {
  $node = \Drupal::routeMatch()->getParameter('node');
  if ($node instanceof NodeInterface) {
    // Add node ID body class.
    $variables['attributes']['class'][] = 'node-' . $node->id();

    // Add content type machine name body class.
    $variables['attributes']['class'][] = 'node-type--' . str_replace('_', '-', $node->bundle());
  }

  // Check different error conditions to add body classes.
  // Borrowed from errorize module.
  $route_name = \Drupal::request()->attributes->get('_route');
  if ('system.404' === $route_name) {
    $variables['attributes']['class'][] = 'error404';
  }
  if ('system.403' === $route_name) {
    $variables['attributes']['class'][] = 'error403';
  }
}
