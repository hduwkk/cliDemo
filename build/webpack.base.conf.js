const path = require('path');
const WebpackBar = require('webpackbar');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const getBabelCommonConfig = require('../antd-tools/getBabelCommonConfig');
const babelConfig = getBabelCommonConfig(false);

// babelConfig.plugins.push(require.resolve('babel-plugin-syntax-dynamic-import'));

const vueLoaderOptions = {
  loaders: {
    js: [
      {
        loader: 'babel-loader',
        options: {
          presets: ['env'],
          plugins: ['transform-vue-jsx'],
        },
      },
    ],
  },
};

module.exports = {
  mode: 'production',
  entry: {
    index: [`./site/${process.env.ENTRY_INDEX || 'index'}.js`],
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderOptions,
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: babelConfig,
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]',
        }
      }
    ]
  },
  resolve: {
    modules: ['node_modules', path.join(__dirname, '../node_modules')],
    extensions: ['.js', '.jsx', '.vue'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      antd: path.join(__dirname, '../components'),
      'ant-design-vue': path.join(__dirname, '../components'),
      'ant-design-vue/es': path.join(__dirname, '../components'),
      'ant-design-vue/lib': path.join(__dirname, '../components'),
      '@': path.join(__dirname, '../'),
    },
  },
  plugins: [new VueLoaderPlugin(), new WebpackBar()],
};
