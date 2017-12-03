// gulpfile.js

'use strict';
 
var gulp = require('gulp');
var compileCSS = require('gulp-sass');
var minifyCSS = require('gulp-clean-css') 
var minifyHTML = require('gulp-htmlmin');
var concat = require('gulp-concat');

gulp.task('css', function() {
	return gulp.src('./source/scss/**/*.scss')
		.pipe(compileCSS().on('error', compileCSS.logError))
		.pipe(minifyCSS())
		.pipe(concat('all.min.css'))
		.pipe(gulp.dest('./dist/css'));
});

gulp.task('html', function() {
	return  gulp.src('./source/*.html')
		.pipe(minifyHTML({collapseWhitespace: true}))
		.pipe(gulp.dest('./dist/'))
});
 
gulp.task('css:watch', function () {
	gulp.watch('./source/scss/**/*.scss', ['css']);
});

gulp.task('html:watch', function () {
	gulp.watch('./source/*.html', ['html']);
});

gulp.task('default', ['css', 'html']);