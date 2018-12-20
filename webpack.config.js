// Webpack 4 configuration
const path = require('path')
const webpack = require('webpack')
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const NotifierPlugin = require('webpack-build-notifier')

var name = 'ad-inflow-modal'
var jsOutFile, cssOutFile, plugins = [], optimization = {}

if (process.env.npm_lifecycle_event === 'dist') {
  jsOutFile = name + '.min.js'
  cssOutFile = name + '.min.css'
  optimization.minimizer = [
    new UglifyJsPlugin({
      cache: true,
      parallel: true,
    }),
    new OptimizeCSSAssetsPlugin({})
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
    library: 'AdInflowModal',
    libraryTarget: 'umd',
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
    contentBase: [
      path.resolve(__dirname, "public"),
    ],
    disableHostCheck: true,
    compress: true,
    host: "0.0.0.0",
    port: 8080
  }
}
