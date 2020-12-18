const fs = require('fs')
const through2 = require('through2')


fs.createReadStream('a.txt').pipe(function (a,b) {
  // for (let i = 0; i < chunk.length; i++) {
  //   if (chunk[i] == 97) {
  //     chunk[i] = 122
  //   }
  // }
  // this.push(chunk)
  // callback()
  console.log(a,b)
})
// .pipe(fs.createWriteStream('otherOutput/t2.txt'))
  .on('finish', () => {
    console.log('outout done .. ..')
  })
