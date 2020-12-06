const gulp = require("gulp");
const uglify = require('gulp-uglify-es').default;
const minifyjs = require('gulp-js-minify');

module.exports = function compress() {
    return gulp.src('src/js/*.js')
        .pipe(uglify(/* options */))
        .pipe(minifyjs())
        .pipe(gulp.dest('dist/js/'));
};
