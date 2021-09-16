// Webpack 5 configuration
const path = require('path')
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const NotifierPlugin = require('webpack-build-notifier')

var name = 'ad-inflow-modal'
var jsOutFile, cssOutFile, plugins = [], optimization = {}

if (process.env.npm_lifecycle_event === 'dist') {
  jsOutFile = name + '.min.js'
  cssOutFile = name + '.min.css'
  optimization.minimizer = [
    new TerserPlugin(),
    new CssMinimizerPlugin()
  ]
} else {
  jsOutFile = name + '.js'
  cssOutFile = name + '.css'
  optimization.minimize = false
}

plugins.push(new NotifierPlugin({
  title: optimization.minimizer ? 'minified ' + name : name,
}))

plugins.push(new MiniCssExtractPlugin({
  filename: cssOutFile,
}))

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  optimization: optimization,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: jsOutFile,
    library: {
      type: 'umd',
      name: 'AdInflowModal',
      export: 'default',
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader'
        },
        include: [
          path.resolve(__dirname, 'src')
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.svg$/,
        use: {
          loader: 'svg-inline-loader?classPrefix=ad-inflow-modal-'
        },
      },
    ],
  },
  plugins: plugins,
  devServer: {
    static: [
      path.resolve(__dirname, "public"),
    ],
    // firewall: false,
    compress: true,
    host: '0.0.0.0',
    port: 8080
  }
}
