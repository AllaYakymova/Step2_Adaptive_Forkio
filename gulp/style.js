const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');

module.exports = function style() {
    return gulp.src('src/styles/*.scss')
        .pipe(plumber())
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('style.css'))
        .pipe(autoprefixer({
        cascade: false
    }))
        .pipe(cleanCSS({
            debug: true,
            compatibility: "*",
        }, (details) => {
            console.log(`${details.name}: Originals size: ${details.stats.originalSize} - Minimized size: ${details.stats.minifiedSize}`);
        }))
        .pipe(rename({
            suffix: '.min' }))
        .pipe(gulp.dest('dist/css/'))
};



