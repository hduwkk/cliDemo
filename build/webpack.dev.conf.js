const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');

module.exports = merge(baseWebpackConfig, {
  mode: 'development',
  entry: {
    desktop: './site/desktop/main.js',
    desktop: './site/mobile/main.js'
  },
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
    quiet: true,
    historyApiFallback: {
      rewrites: [{ from: /./, to: '/index.html' }]
    },
    disableHostCheck: true,
    hot: true,
    open: false
  },
  resolve: {
    alias: {
      'site-desktop-shared': path.join(__dirname, '../site/md/site-desktop-shared.js')
    }
  },
  devtool: '#source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'site/desktop/index.html',
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: 'site/mobile/index.html',
      filename: 'mobile.html',
    })
  ]
});
