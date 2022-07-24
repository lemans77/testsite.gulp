const {src, dest, series, watch} = require('gulp');
const browserSync = require('browser-sync').create();

function serve() {
  browserSync.init({
    server: './src',
    port: 2140
  })
}

exports.serve = series(serve)