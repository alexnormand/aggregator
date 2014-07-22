var fs = require('fs');
var gulp = require('gulp');
//var watch = require('gulp-watch');
var browserify = require('browserify');
var stringify = require('stringify');

gulp.task('browserify', function() {
  browserify()
    .transform(stringify())
    .add('./js/main.js')
    .bundle()
    .pipe(fs.createWriteStream('./build/js/main.js'));
});

gulp.task('default', function() {
  gulp.watch('js/**/*.js', ['browserify']);
});
