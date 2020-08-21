import {
  configure
} from '@storybook/html';

import '../assets/css/main.style.css';
import jquery from 'jquery';
global.$ = jquery;
global.jQuery = jquery;

import Twig from 'twig';
import twigDrupal from 'twig-drupal-filters';
// Add the filters to Twig instance.
twigDrupal(Twig);

configure(require.context('../src/components', true, /\.stories\.js$/), module);
