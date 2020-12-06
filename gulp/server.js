const gulp = require("gulp");
const server = require('browser-sync').create();
const jsCompress = require("./jscript");
const styles = require("./style");
const html = require("./html");

function readyReload(cb) {
    server.reload();
    cb();
}

module.exports = function browserSync(cb) {
    server.init({
        server: "./",
        notify: false,
        open: true,
        cors: true,
    });
    gulp.watch('index.html', gulp.series(html, readyReload));
    gulp.watch('src/js/*.js', gulp.series(jsCompress, readyReload));
    gulp.watch('src/styles/**/*.scss', gulp.series(styles, (cb) => gulp.src('dist/css').pipe(server.stream()).on("end", cb)));
    return cb();
};