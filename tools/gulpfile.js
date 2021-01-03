const gulp = require('gulp');
const path = require('path');
// const rimraf = require('rimraf')
const through2 = require('through2');
const merge2 = require('merge2');
const { src, series, dest } = gulp;
const transformLess = require('./transformLess');
const babel = require('gulp-babel');
const getBabelCommonConfig = require('./getBabelCommonConfig');
const util = require('./utils');

const cwd = process.cwd();
const libDir = path.join(cwd, 'lib');
const esDir = path.join(cwd, 'es');
const distDir = path.join(cwd, 'dist');

function compile(dir) {
  // 删除dist目录
  const sources = [
    'components/**/*.js',
    'components/**/*.jsx',
    '!components/*/__tests__/*'
  ];
  return merge2([
    compileLess(dir),
    compileJsFileStream(gulp.src(sources), dir)
  ]);
}
function compileLess(dir) {
  return src('components/**/index.less')
    .pipe(
      through2.obj(function (file, encoding, next) {
        this.push(file.clone());
        const filePath = util.formatPath(file.path);
        if (filePath.match(/\/style\/index\.less/)) {
          transformLess(filePath)
            .then((css) => {
              file.contents = Buffer.from(css);
              file.path = filePath.replace(/\.less$/, '.css');
              this.push(file);
              next();
            })
            .catch((err) => {
              console.error(err);
            });
        } else {
          next();
        }
      })
    )
    .pipe(dest(dir));
}

function compileJsFileStream(js, dir) {
  const modules = dir === esDir ? false : void 0;
  const babelConfig = getBabelCommonConfig(modules);
  babelConfig.babelrc = false;
  delete babelConfig.cacheDirectory;
  if (module === false) {
    // replaceLib
  }
  console.log('before babel....')
  const stream = js.pipe(babel(babelConfig)).pipe(
    through2.obj(function (file, encoding, next) {
      this.push(file.clone());
      const filePath = util.formatPath(file.path);
      // if (filePath.match(/\/style\/index\.(js|jsx)$/)) {
      //   const content = file.contents.toString(encoding)
      //   file.contents =  Buffer.from(content.replace(/\/style\/?'/g, "/style/css'").replace(/\.less/g, '.css'))
      //   file.path = file.path.replace(/index\.(js|jsx)$/, 'css.js')
      //   this.push(file)
      //   next()
      // } else {
      //   next()
      // }
      next();
    })
  );
  return stream.pipe(gulp.dest(dir));
}

console.log(`cwd: ${cwd}/nlib: ${libDir}/nes: ${esDir}`);

gulp.task(
  'compile-with-es',
  series((done) => {
    compile(esDir).on('finish', () => done());
  })
);
