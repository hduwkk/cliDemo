const {series} = require('gulp')


function clean(done) {
  console.log('clean')
  done()
}

function build(cb) {
  console.log('build')
  cb()
}

// 如果需要让任务task按顺序执行，请使用series方法
// 对于希望以最大并发来运行任务tasks，请使用parallel方法将它们组合

/**
 * series、parallel可以组合使用
 * 例如：
 * exports.build = series(
 *   clean,
 *   parallel(cssTranspile, series(jsTranspile, jsBundle)),
 *   parallel(cssMinify, jsMinify),
 *   publish
 * )
 */

exports.build = build
exports.default = series(clean, build)
