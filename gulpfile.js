// all gulp tasks are located in the ./build/tasks directory
// gulp configuration is in files in ./build directory
//require('babel-core/register');
var gulp = require('gulp');
var plumber = require('gulp-plumber');
var gutil = require('gulp-util');

var gulp_src = gulp.src;

//https://www.timroes.de/2015/01/06/proper-error-handling-in-gulp-js/
gulp.src = function() {
    return gulp_src.apply(gulp, arguments)
        .pipe(plumber(function(error) {
                // Output an error message
                gutil.log(gutil.colors.red('Error (' + error.plugin + '): ' + error.message));
                // emit the end event, to properly end the task
                this.emit('end');
            })
        );
};


require('require-dir')('./build/tasks');

gulp.task('default', ['build:dev','serve:dev','watch']);
