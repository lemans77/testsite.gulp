const {src, dest, series, watch} = require('gulp');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');

function serve() {
  browserSync.init({
    server: './src',
    port: 2140
  })
}

function scripts() {
	return src('src/js/**.js')
	.pipe(concat('index.js'))
	.pipe(dest('dist'))
}

exports.serve = series(serve)
exports.scripts = series(scripts)