const {src, dest} = require('gulp')
const { EventEmitter } = require('events')

// 返回stream
function streamTask () {
  return src('*.js').pipe(dest('output'))
}

// 返回promise
function promiseTask () {
  console.log('promiseTask .. .')
  return Promise.resolve('the value is ignored')
}

// 返回event emitter
function eventEmitterTask () {
  const emitter = new EventEmitter()
  setTimeout(() => {
    console.log('emitter.emit finish')
    emitter.emit('finish') // done ....
  }, 300)
  return emitter
}

// 返回child process

// 返回 observable

// 如果不返回任何内容，那么使用callback，表示任务已经完成
function callbackTask (cb) {
  cb(new Error('一个错误'))
}


// gulp不再支持同步任务synchronous tasks,因为同步任务常常会导致难以调试的细微错误。
exports.eventTask = eventEmitterTask
exports.default = callbackTask
