const gulp = require('gulp'),
      stylus = require('gulp-stylus'),
      concat = require('gulp-concat');


gulp.task('css', function() {
	return gulp.src('./client/styles/*.css')
    .pipe(stylus())
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('.temp'))
});
