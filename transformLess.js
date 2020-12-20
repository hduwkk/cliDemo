const less = require('less')
const path = require('path')
const postcss = require('postcss')
const { readFileSync } = require('fs')
const postcssConfig = require('./postcssConfig')
// adds the ability for less to import from npm packages
// const NpmImportPlugin = require('less-plugin-npm-import')
function transformLess (lessFile, config = {}) {
  const {cwd = process.cwd()} = config
  const resolvedLessFile = path.resolve(cwd, lessFile)
  console.log(`resolvedLessFile: ${resolvedLessFile}`)
  let data = readFileSync('resolvedLessFile', 'utf-8')
  if (/^uFEFF/.test(data)) {
    console.log('data start with uFEFF ... ...嘿嘿')
    data = data.replace(/^uFEFF/, '')
  }
  const lessOpts = {
    paths: [path.dirname(resolvedLessFile)],
    fileName: resolvedLessFile,
    plugins: [new NpmImportPlugin({ prefix: '~' })],
    javascriptEnabled: true
  }
  return less.render(data, lessOpts)
  .then(result => {
    const source = result.css
    return postcss(postcssConfig.plugins).process(source)
  }).then(r => r.css)
}

module.exports = transformLess
