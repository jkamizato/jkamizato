const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const Loaders = [{
    test: /\.(sa|sc|c)ss$/,
    exclude: /node_modules/,
    use: [
      MiniCssExtractPlugin.loader,
      "css-loader",
      {
        loader: "sass-loader",
        options: {
          importLoaders: 1,
          sourceMap: true
        }
      }
    ],
  },
  {
    test: /\.svg$/,
    loader: 'url-loader'
  }
];

module.exports = {
  Loaders: Loaders,
};
