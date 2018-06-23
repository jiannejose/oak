'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');

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

gulp.task('sass:watch', function() {
  gulp.watch('./assets/scss/**/*.scss', ['sass']);
});

gulp.task('js-compile', function() {
  return gulp.src('./assets/js/main.js')
    .pipe(babel({
      presets: ['env']
    }))
    uglify()
    .pipe(gulp.dest('dist/js'))
});