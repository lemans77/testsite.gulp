const {src, dest, series, watch} = require('gulp');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;;

function serve() {
  browserSync.init({
    server: './src',
    port: 2140
  })
}

function scripts() {
	return src([
		'node_modules/jquery/dist/jquery.min.js',
		'src/js/script.js'
	])
	.pipe(concat('index.js'))
	.pipe(uglify())
	.pipe(dest('dist'))
}

exports.serve = series(serve)
exports.scripts = series(scripts)