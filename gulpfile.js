var fs = require('fs');
var gulp = require('gulp');

var cssmin = require('gulp-cssmin');
var rimraf = require('gulp-rimraf');
var browserify = require('browserify');
var stringify = require('stringify');
var streamify = require('gulp-streamify');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var concat = require('gulp-concat');

gulp.task('clean', function() {
  return gulp.src('./build/', { read: false }).pipe(rimraf({ force: true }));
});

gulp.task('browserify', ['clean'], function() {
  return browserify()
    .transform(stringify())
    .add('./app/js/main.js')
    .bundle({ debug: true })
    .pipe(source('main.js'))
    .pipe(streamify(uglify()))
    .pipe(gulp.dest('./build/js'));
});

gulp.task('minify-css', ['clean'], function() {
  return gulp
    .src('./app/css/**/*.css')
    .pipe(concat('style.css'))
    .pipe(cssmin({ keepSpecialComments: 0 }))
    .pipe(gulp.dest('./build/css'));
});

gulp.task('build', ['browserify', 'minify-css'], function() {
  gulp.src(['./app/index.html', './app/favicon.ico', './app/apple-touch-icon.png']).pipe(gulp.dest('./build'));
  gulp.src('./app/get/**', { dot: true }).pipe(gulp.dest('./build/get'));
});

gulp.task('watch', function() {
  gulp.watch(['./app/js/**', './app/index.html', './app/css/**'], ['build']);
});