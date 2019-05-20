const { watch, series, parallel, src, dest } = require('gulp');
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

// function watchFiles(cb) {
//     watch(['./src/{layouts,partials,helpers,data}/**/*'], [panini.refresh]);
//     cb();
//   }

exports.pages = pages;
// exports.watch = function(cb) {
//     parallel(watchFiles, pages);
//     cb();
// }
// exports.watch = watchFiles();
exports.default = series(pages);

// console.log(exports.watch);

exports.watch = function() {
    // You can use a single task
    // watch('src/*.css', css);
    watch('./{layouts,partials,helpers,data,pages}/**/*', series(pages));
    // Or a composed task
    // watch('src/*.js', series(clean, javascript));
  };
