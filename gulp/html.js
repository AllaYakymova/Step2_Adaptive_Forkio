const gulp = require('gulp');
const plumber = require('gulp-plumber');
const htmlValidator = require('gulp-w3c-html-validator');

module.exports = function html() {
    return gulp.src('*.html')
        .pipe(plumber())
        .pipe(htmlValidator())
};