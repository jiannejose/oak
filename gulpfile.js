'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');

gulp.task('watch', function() {
  gulp.start(['copy-lib', 'copy-imgs']);
  gulp.watch('./assets/scss/**/*.scss', ['sass']);
  gulp.watch('./assets/js/*.js', ['js-compile']);
});

gulp.task('sass', function() {
  return gulp.src('./assets/scss/main.scss')
  .pipe(sass({
    includePaths: require('node-normalize-scss').includePaths
  }))
  .pipe(sass().on('error', sass.logError))
  .pipe(sourcemaps.init())
  .pipe(rename('styles.css'))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('./dist/css/'));
});

gulp.task('js-compile', function() {
  return gulp.src('./assets/js/main.js')
    .pipe(babel({
      presets: ['env']
    }))
    uglify()
    .pipe(gulp.dest('dist/js'))
});

gulp.task('copy-lib', function() {
  return gulp.src('./assets/css_lib/*.css')
  .pipe(gulp.dest('./dist/css/css_lib/'));
});

gulp.task('copy-imgs', function() {
  return gulp.src(['./assets/img/*.jpg', './assets/img/*.png'])
  .pipe(gulp.dest('./dist/img'));
});