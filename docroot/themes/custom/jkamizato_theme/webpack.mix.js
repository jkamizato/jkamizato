/*
 |--------------------------------------------------------------------------
 * Mix Asset Management
 |--------------------------------------------------------------------------
 |
 * Mix provides a clean, fluent API for defining some Webpack build steps
 * for your application. See https://github.com/JeffreyWay/laravel-mix.
 |
 */

// * Imports the proxy from config.js to avoid conflicts
let mix = require('laravel-mix');
let proxy = require('./config/config.js');
require('laravel-mix-copy-watched');

/*
 |--------------------------------------------------------------------------
 * Configuration
 |--------------------------------------------------------------------------
 */
mix
  .setPublicPath('assets')
  .disableNotifications()
  .options({
    processCssUrls: false
  });

/*
 |--------------------------------------------------------------------------
 * Browsersync
 |--------------------------------------------------------------------------
 */
mix.browserSync({
  proxy: proxy.proxy,
  files: ['assets/js/**/*.js', 'assets/css/**/*.css', 'assets/components/**/*.css', 'assets/components/**/*.js'],
  stream: true,
});

/*
 |--------------------------------------------------------------------------
 * SASS
 |--------------------------------------------------------------------------
 */
// General CSS file
mix.sass('src/sass/main.style.scss', 'css');

/*
 |--------------------------------------------------------------------------
 * JS
 |--------------------------------------------------------------------------
 */
mix.js('src/js/main.script.js', 'js');

/*
 |--------------------------------------------------------------------------
 * IMAGES / ICONS
 |--------------------------------------------------------------------------
 */
// * Directly copies the images, icons and fonts. Does not do any optimizations on the images
mix.copyDirectoryWatched('src/images', 'assets/images');
mix.copyDirectoryWatched('src/icons', 'assets/icons');
mix.copyDirectoryWatched('src/fonts/**/*', 'assets/fonts');
