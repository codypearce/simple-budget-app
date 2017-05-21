const gulp = require('gulp'),
      stylus = require('gulp-stylus'),
      concat = require('gulp-concat');

gulp.task('css', function() {
	return gulp.src('./client/styles/**/*.styl')
    .pipe(stylus())
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('.tmp'))
});

gulp.task('js', function() {
  return gulp.src('./client/js/**/*.js')
    .pipe(concat('app.js'))
    .pipe(gulp.dest('.tmp'))
})

gulp.task('images', function() {
  return gulp.src('./client/images/**')
    .pipe(gulp.dest('.tmp/images/'))
})

gulp.task('lib', function() {
  return gulp.src('./client/lib/**/*')
    .pipe(gulp.dest('.tmp/lib'))
})

gulp.task('default', ['css', 'js', 'images', 'lib']);


gulp.task('watch', ['default'], function() {
  gulp.watch('./client/styles/**/*.styl', ['css']);
  gulp.watch('./client/js/**/*.js', ['js']);
  gulp.watch('./client/images/**', ['images']);
})
