var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var cssmin = require('gulp-cssmin');
var imagemin = require('gulp-imagemin');


gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./app/"
        }
    });
});

gulp.task('sass', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'))
        .pipe(reload({ stream: true }))
});

gulp.task('style', function() {
    gulp.src(['./css/**/*.css', '!./css/**/*.min.css'])
        .pipe(cssmin())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./app/css'))
        .pipe(reload({ stream: true }))
});

gulp.task('images', () =>
    gulp.src('./images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./app/images'))
);

gulp.task('scripts', function() {
    gulp.src(['./js/**/*.js', '!./js/**/*.min.js'])
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest('./app/js'))
        .pipe(reload({ stream: true }))
});

gulp.task('watch', function() {
    gulp.watch('./sass/**/*.scss', ['sass']);
    gulp.watch('./js/**/*.js', ['scripts']);
    gulp.watch('./css/**/*.css', ['style']);
    gulp.watch('./images/**/*.images', ['images']);

});


gulp.task('default', ["sass", "watch", "scripts", "style", "browser-sync", "images"]);