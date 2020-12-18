const fs = require('fs')
const through2 = require('through2')


fs.createReadStream('a.txt').pipe(through2(function (chunk, enc, callback) {
  for (let i = 0; i < chunk.length; i++) {
    if (chunk[i] == 97) {
      chunk[i] = 122
    }
  }
  this.push(chunk)
  callback()
})).pipe(fs.createWriteStream('otherOutput/out.txt'))
.on('finish', () => {
  console.log('outout done .. ..')
})
