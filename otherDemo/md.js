const fs = require('fs')
const path = require('path')

// const regPath = `${path.join(__dirname, '../components')}/**/README.md`
// console.log(regPath, 'regPath')
console.log(path.join(__dirname, '../components/**/README.md'))
console.log(path.resolve(__dirname, '../components/**/README.md'))
const content = fs.readFileSync(path.resolve(__dirname, '../components/**/README.md'))

console.log(content, 'content')