const gulp = require('gulp');
const styles = require('./gulp/style');
const clean = require('gulp-clean');
const images = require('./gulp/image');
const jsCompress = require('./gulp/jscript');
const html = require("./gulp/html");
const server = require('./gulp/server');
const reset = require('./gulp/reset');



function cleanAll() {
    return gulp.src('dist/**/*.*')
        .pipe(clean({
            read: false,
        }))
}

function fonts() {
    return gulp.src('src/fonts/*').pipe(gulp.dest("dist/fonts"));
}
const build = gulp.series(cleanAll, html, reset, styles, images, jsCompress, fonts);

module.exports.build = build;
module.exports.dev = gulp.series(build, server);


// const dev = gulp.parallel(styles, images, jsCompress, html);

// module.exports.build = gulp.series(cleanAll, dev);