const {src, dest} = require('gulp')
const babel = require('gulp-babel')
// const uglify = require('gulp-uglify')

/*
src接受glob参数，并从文件系统中读取一个文件，然后生成一个Node流(stream)。它将所有匹配的文件读取到内存中，并通过流stream进行处理
由src产生的流，应当从任务task中返回并发出异步完成的信号
pipe方法用于连接转换流transform streams或可写流writable streams
dest接受一个目录作为参数，并且会产生一个流，通常作为终止流。当他接收到通过管道传输的文件时，会将文件的内容以及文件属性写入到指定的目录中。
gulp还提供了symlink方法，操作类似dest，但是创建的是链接而不是文件。
*/
function defaultTask () {
  return src('src/*.js').pipe(dest('output/'))
}

function jsTask () {
  return src('src/*.js')
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(src('vendor/*.js'))
    // .pipe(uglify())
    .pipe(dest('output'))
}

exports.default = jsTask
