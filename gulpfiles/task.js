const gulp = require('gulp')
const { src, dest, series, parallel } = gulp

function clean (done) {
  console.time('clean')
  setTimeout(() => {
    console.timeEnd('clean')
    console.log(Date.now(), 'clean')
    done()
  }, 100)
}

function cssTranspile (done) {
  console.time('cssTranspile')
  setTimeout(() => {
    console.timeEnd('cssTranspile')
    console.log(Date.now(), 'cssTranspile')
    done()
  }, 200)
}

function jsTranspile (done) {
  console.time('jsTranspile')
  setTimeout(() => {
    console.timeEnd('jsTranspile')
    console.log(Date.now(), 'jsTranspile')
    done()
  }, 100)
}

function jsBundle (done) {
  console.time('jsBundle')
  setTimeout(() => {
    console.timeEnd('jsBundle')
    console.log(Date.now(), 'jsBundle')
    done()
  }, 100)
}

function publish (done) {
  console.time('publish')
  setTimeout(() => {
    console.timeEnd('publish')
    console.log(Date.now(), 'publish')
    done()
  }, 100)
}


gulp.task('compile', series(
  clean,
  parallel(cssTranspile, series(jsTranspile, jsBundle)),
  publish
))
