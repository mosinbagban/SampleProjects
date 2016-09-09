var gulp = require('gulp');
var paths = require('../paths');
var del = require('del');
var vinylPaths = require('vinyl-paths');

// deletes all files in the output path
gulp.task('clean:dist', function() {
    return gulp.src([paths.output])
        .pipe(vinylPaths(del));
});

gulp.task('clean:css', function() {
    return gulp.src(['src/**/*.css'])
        .pipe(vinylPaths(del));
});

gulp.task('wipe:dist', function () {
    return del(['dist/**/*']);
});
