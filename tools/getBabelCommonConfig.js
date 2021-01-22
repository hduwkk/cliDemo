// babel-plugin-transform-vue-jsx
// babel-plugin-inline-import-data-uri
// babel-plugin-transform-es3-member-expression-literals
// babel-plugin-transform-es3-property-literals
// babel-plugin-transform-object-assign
// babel-plugin-transform-object-rest-spread
// babel-plugin-transform-class-properties

// nev-test babel-plugin-istanbul
module.exports = function (modules) {
  const plugins = [
    require.resolve('babel-plugin-transform-vue-jsx')
  ]
  plugins.push([
    require.resolve('@babel/plugin-transform-runtime')
  ])
  return {
    presets: [
      [
        require.resolve('@babel/preset-env'),
        {
          modules,
          targets: {
            browsers: [
              'last 2 versions',
              'Firefox ESR',
              '> 1%',
              'ie >= 9',
              'iOS >= 8',
              'Android >= 4'
            ]
          }
        }
      ]
    ],
    plugins: plugins,
    env: {}
  }
}
