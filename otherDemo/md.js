const fs = require('fs')
const path = require('path')
var hljs = require('highlight.js')
const md = require('markdown-it')({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str, true).value
      } catch(err) {
        console.log(err)
      }
    }
    return ''
  },
  html: true
})
md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
  const result = self.renderToken(tokens, idx, options)
  console.log('link_open ....', result)
  return result
}

// const regPath = `${path.join(__dirname, '../components')}/**/README.md`
// console.log(regPath, 'regPath')
// console.log(path.join(__dirname, '../components/**/README.md'))
// console.log(path.resolve(__dirname, '../components/**/README.md'))
// const content = fs.readFileSync(path.resolve(__dirname, '../components/**/README.md'))

const baseDir = path.join(__dirname, '../components')
const dirs = fs.readdirSync(baseDir, {withFileTypes: true})
dirs.forEach(dir => {
  if (dir.isDirectory()) {
    fs.readFile(path.join(baseDir, dir.name, 'README.md'), { encoding: 'utf-8' }, (err, file) => {
      if (err) return console.log(err.toString())
      const result = md.render(file.toString())
      // fs.writeFile(dir.name + '_README.html', result, (err) => {
      //   if (err) {
      //     return console.log(err)
      //   }
      //   console.log(dir.name + ' 文件已保存')
      // })
      console.log(result, 'file')
    })
  }
})
