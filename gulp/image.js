const gulp = require('gulp');
const gulpImage = require('gulp-image');

module.exports = function image() {
    return gulp.src('src/img/**/*')
        .pipe(gulpImage())
        .pipe(gulp.dest('dist/img/'));
};
