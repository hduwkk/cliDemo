const gulp = require('gulp')
const path = require('path')
// const rimraf = require('rimraf')
const through2 = require('through2')
const merge2 = require('merge2')
const {src, series, dest} = gulp
const transformLess = require('./transformLess')

const cwd = process.cwd()
const libDir = path.join(cwd, 'lib')
const esDir = path.join(cwd, 'es')
const distDir = path.join(cwd, 'dist')

function compile (dir) {
  // 删除dist目录
  return merge2([compileLess(dir)])
}
function compileLess (dir) {
  return src('components/**/index\.less')
  .pipe(through2.obj(function (file, encoding, next) {
    console.log(`less ${encoding}, ${file.path}, ${file.path.match(/\/style\/index\.less/)}`)
    this.push(file.clone())
    file._path = file.path.replace(/\\/g, '\/')
    if (file._path.match(/\/style\/index\.less/)) {
      transformLess(file._path)
      .then(css => {
        file.contents = Buffer.from(css)
        file.path = file._path.replace(/\.less$/, '.css')
        this.push(file)
        next()
      })
      .catch(err => {
        console.error(err)
      })
    } else {
      next()
    }
  }))
  .pipe(dest(dir))
}

console.log(`cwd: ${cwd}/nlib: ${libDir}/nes: ${esDir}`)

gulp.task('compile-with-es', series(done => {
  compile(esDir).on('finish', () => done())
}))
