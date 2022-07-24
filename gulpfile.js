const {src, dest, series, watch} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const csso = require('gulp-csso');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const include = require('gulp-file-include');
const htmlmin = require('gulp-htmlmin');
const autoprefixer = require('gulp-autoprefixer');
const clean = require('gulp-clean');

function clear() {
  return src('dist', {read: false, allowEmpty: true})
    .pipe(clean())
}

function html() {
  return src('src/**.html')
    .pipe(include({
      prefix: '@@'
    }))
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(dest('dist'))
}

function scss() {
  return src('src/scss/**.scss')
    .pipe(sass())
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(csso())
    .pipe(concat('index.css'))
    .pipe(dest('dist'))
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

function serve() {
  browserSync.init({
    server: './dist',
    port: 2140
  })
  watch('src/**/**.html', series(html)).on('change', browserSync.reload)
  watch('src/scss/**.scss', series(scss)).on('change', browserSync.reload)
  watch('src/js/**.js', series(scripts)).on('change', browserSync.reload)
}

exports.serve = series(clear, scss, html, serve)