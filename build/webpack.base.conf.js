const path = require('path');
const WebpackBar = require('webpackbar');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const getBabelCommonConfig = require('../tools/getBabelCommonConfig');

const babelConfig = getBabelCommonConfig(false);

// babelConfig.plugins.push(require.resolve('babel-plugin-syntax-dynamic-import'));

// const vueLoaderOptions = {
//   loaders: {
//     js: [
//       {
//         loader: 'babel-loader',
//         options: {
//           presets: ['env'],
//           plugins: ['transform-vue-jsx'],
//         },
//       },
//     ],
//   },
// };

// const CACHE_LOADER = {
//   loader: 'cache-loader',
//   options: {
//     cacheDirectory: path.join(__dirname, '../node_modules/.cache')
//   },
// };

module.exports = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
        // options: vueLoaderOptions,
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
      },
      {
        test: /\.md$/,
        use: ['vue-loader', path.resolve(__dirname, '../packages/markdownLoader/index.js')]
        // use: ['@vant/markdown-loader']
      }
    ]
  },
  resolve: {
    modules: ['node_modules', path.join(__dirname, '../node_modules')],
    extensions: ['.js', '.jsx', '.vue'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      'w-design': path.join(__dirname, '../components'),
      'w-design/es': path.join(__dirname, '../components'),
      'w-design/lib': path.join(__dirname, '../components'),
      '@': path.join(__dirname, '../'),
    },
  },
  plugins: [new VueLoaderPlugin(), new WebpackBar()]
};
