const program = require('commander')
require('../gulpfile')
const gulp = require('gulp')

program.parse(process.argv)

const task = program.args[0]
console.log('task: ', task)

// const taskInstance = gulp.task(task)
// if (taskInstance) {
//   try {
//     taskInstance.apply(gulp)
//   } catch (err) {
//     console.log(err)
//   }
// }
