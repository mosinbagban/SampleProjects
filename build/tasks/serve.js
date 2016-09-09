var gulp = require('gulp');
var server = require('voya-stub-server');

// dev server
gulp.task('serve:dev', function () {
    return server({port: 9200, paths: ['.']});
})

// dist server
gulp.task('serve:dist', function () {
    return server({port: 9200, paths: ['./dist']});
});
