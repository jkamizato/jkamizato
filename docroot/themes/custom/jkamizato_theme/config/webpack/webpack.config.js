const path = require('path');
const glob = require('glob');
const loaders = require('./loaders');
const plugins = require('./plugins');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: glob.sync('./src/components/**/*.scss').reduce((entries, path) => {
    /**
     * based on the current structure we will replace part of the path
     * that we don't need
     */
    const entry = path.replace('./src/components', '');
    /**
     * Here we start building our object by placing the "entry" variable from
     * the previous line as a key and the entire path including the file name
     * as the value
     */
    var pattern = /(_)?(\w+)\.scss$/;
    return {
      ...entries,
      [entry.replace(pattern, '$2')]: path
    }
  }, {}),
  output: {
    path: path.resolve(__dirname, '../../assets/components/'),
  },
  module: {
    rules: loaders.Loaders,
  },
  plugins: [
    plugins.MiniCssExtractPlugin,
    plugins.FixStyleOnlyEntriesPlugin,
  ],
  mode: devMode ? 'development' : 'production'
};
