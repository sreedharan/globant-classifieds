var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
var livereload = require('gulp-livereload');

gulp.task('sass', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'))
        .pipe(livereload())
});

gulp.task('livereload', function() {
    connect.server()
    livereload.listen()
    gulp.watch('./sass/**/*.scss', ['sass']);
});


//Watch task
gulp.task('default', ["sass", "livereload"]);