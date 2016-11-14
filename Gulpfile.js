var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('sass', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'))
        .pipe(reload({ stream: true }))
});

gulp.task('livereload', function() {
    connect.server()
    gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('scripts', function() {
    gulp.src(['./js/**/*.js', '!./js/**/*.min.js'])
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest('./js'))
        .pipe(reload({ stream: true }))
});


gulp.task('default', ["sass", "livereload", "scripts"]);