'use strict';

var gulp = require('gulp');
var babel = require('gulp-babel');
var jshint = require('gulp-jshint');
var del = require('del');
var mocha = require('gulp-mocha');

gulp.task('default', ['lint', 'babel']);

gulp.task('babel', ['clean'], function () {
  return gulp.src('src/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('build'));
});

gulp.task('lint', function () {
  return gulp.src(['*.js', 'src/**/*.js'])
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'));
});

gulp.task('test', function () {
  return gulp.src('test/**/*.js')
    .pipe(mocha({reporter: 'nyan'}));
});

gulp.task('clean', function (cb) {
  del(['build'], cb);
});
