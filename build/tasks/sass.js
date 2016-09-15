var gulp = require('gulp');
var sass = require('gulp-sass');
var paths = require('../paths.js');
var System = require('systemjs');
var config = require('../../config.js');
var path = require('path');
var appRoot = require('app-root-path');
var browserSync = require('browser-sync');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');

function importer(url, prev, done) {
    if (url.slice(0,5) === 'jspm:') {
        // Only transform strings prefixed with '~'
        System.normalize(url.slice(5)).then(function (normalized) {
            var filePath = normalized.replace(':', '/').replace('.js', '.scss').split('jspm_packages')[1];
            done({file: path.join(appRoot.path, 'jspm_packages', filePath)});
        }).catch(function(){
            done(new Error());
        });
    } else {
        done({file: url});
    }
}
gulp.task('sass',function(){
     return gulp.src(['./'+paths.scss])
        .pipe(sass({importer: importer,
            includePaths: [
                './src'
            ]}).on('error', sass.logError))
        .pipe(autoprefixer())
         //.pipe(rename({dirname: ''}))
        //.pipe(gulp.dest(paths.output))
        .pipe(gulp.dest('./src'))
});

gulp.task('sass-chat-main',function(){
     return gulp.src(['./src/app.scss'])
        .pipe(sass({importer: importer,
            includePaths: [
                './src'
            ]}).on('error', sass.logError))
        .pipe(autoprefixer())
         //.pipe(rename({dirname: ''}))
        .pipe(gulp.dest('./dist/static/public/css/'))
});
