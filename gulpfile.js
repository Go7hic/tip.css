var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    sass = require('gulp-ruby-sass');
gulp.task('styles', function() {
return sass('src/tip.scss', { style: 'expanded' })
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest('dist/css'))
});
gulp.task('default', function() {
    gulp.start('styles');
});
