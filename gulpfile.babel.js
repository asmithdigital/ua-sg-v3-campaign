const { series, src, dest } = require('gulp');
const panini = require('panini');

function pages(cb) {
  return src('pages/**/*.html')
    .pipe(panini({
      root: 'pages/',
      layouts: 'layouts/',
      partials: 'partials/',
      helpers: 'helpers/',
      data: 'data/'
    }))
    .pipe(dest('.'));
  cb();
}

function copy(cb) {
  return src('deps/**/*')
    .pipe(dest('dist/deps'));
  cb();
}

exports.pages = pages;
exports.copy = copy;
exports.default = series(pages);
