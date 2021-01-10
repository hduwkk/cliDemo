const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
console.log('webpack.dev.conf .. .. .. ..');

module.exports = merge(baseWebpackConfig, {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        sideEffects: true,
        use: [
          { loader: 'vue-style-loader' },
          { loader: 'css-loader' },
          { loader: 'less-loader' },
          { loader: 'postcss-loader' }
        ]
      },
      {
        test: /\.css$/,
        sideEffects: true,
        use: ['vue-style-loader', 'css-loader', 'postcss-loader']
      }
    ]
  },
  devServer: {
    port: 3000,
    host: '0.0.0.0',
    historyApiFallback: {
      rewrites: [{ from: /./, to: '/index.html' }]
    },
    disableHostCheck: true,
    hot: true,
    open: false,
    headers: { 'Access-Control-Allow-Origin': '*' }
  },
  performance: {
    hints: false
  },
  devtool: '#source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'site/index.html',
      filename: 'index.html',
      inject: true
    })
  ]
});
