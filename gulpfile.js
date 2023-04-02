const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');

function html() {
  return gulp
    .src('./src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('./dist/'));
}
function styles() {
  return gulp
    .src('./src/styles/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(gulp.dest('./'));
}

function scripts() {
  return gulp
    .src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'));
}

function images() {
  return gulp
    .src('./src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img'));
}

exports.default = gulp.parallel(styles, scripts, images, html);
exports.watch = function () {
  gulp.watch('./src/styles/*.scss', gulp.parallel(styles));
  gulp.watch('./src/scripts/*.js', gulp.parallel(scripts));
  gulp.watch('./src/scripts/*.js', gulp.parallel(html));
};
