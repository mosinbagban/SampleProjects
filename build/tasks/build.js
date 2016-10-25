var gulp = require('gulp');
var preprocess = require('gulp-preprocess');
var concat = require('gulp-concat');
var paths = require('../paths');
var path = require('path');
var replace = require('gulp-replace');
var voyaBuilder = require('voya-builder');
var jspm = require('jspm');
var async = require('async');
var os = require('os');
var del = require('del');
var vinylPaths = require('vinyl-paths');
var exec = require('child_process').exec;
var md5 = require("gulp-md5-assets");
var runSequence = require('run-sequence');
var bundles = require('../bundles.js');
var rename = require("gulp-rename");
var replace = require('gulp-replace');
require('colors');


gulp.task('build:dev', function(){
    runSequence('sass',
                'polyfills',
                'js:dev',
                'lint');
});

gulp.task('build:dist', ['clean:dist'], function(){
    runSequence('sass',
                'sass-chat-main',
                'lint',
                'polyfills',
                'copy:dist',
                'index:dist',
                'js:dist',
                'html-bustcache:dist',
                'copy:chatpage'
                );
});


gulp.task('copy:dist', function () {
    gulp.src('static/**/*.*')
        .pipe(gulp.dest('./dist/static'));
    return gulp.src([
        './jspm_packages/system-csp-production.js',
        './jspm_packages/system-csp-production.js.map',
        './jspm_packages/system-polyfills.js',
        './jspm_packages/system-polyfills.js.map',
        './config.js'
    ])
    .pipe(gulp.dest('./dist/static/genesys/js'));
});

gulp.task('index:dist', function () {
    gulp.src([
        './index.html'
        ])
        .pipe(preprocess({
            context: {
                BUILD_TYPE: 'dist'
            }
        }))
        .pipe(gulp.dest('./dist/'));
});


gulp.task('copy:chatpage', function () {

   gulp.src("./dist/index.html")
    .pipe(rename("/StartGenesysChat.jsp"))
    .pipe(replace('// FOR HTML only', '/* // FOR HTML only'))
    .pipe(replace('// FOR HTML End', '*/ // FOR HTML End'))
    .pipe(replace('/* // FOR JSP Only', '// FOR JSP Only'))
    .pipe(replace('*/ // FOR JSP End', '// FOR JSP End'))
    .pipe(replace('<!doctype html>', ''))
    .pipe(gulp.dest("./dist")); 

});

gulp.task('build:mga', function () {
    gulp.src([
        './mga-pages/login.html',
        './mga-pages/consent-form.html',
        './mga-pages/error.html'
        ])
        .pipe(preprocess({
            context: {
                BUILD_TYPE: 'dist'
            }
        }))
        .pipe(gulp.dest('./dist/mga-pages/'));
});

gulp.task('js:dev', [], function () {
    voyaBuilder({
        mainBundles: {
            lib: bundles.lib
        },
        base: '',
        bundleDest: 'static/genesys/js/bundles/',
        configDest: 'static/genesys/js/bundles-config.js',
        watch: true,
        logStyle: 'generic'
    }, jspm);
});

gulp.task('js:dist', [], function () {
    return voyaBuilder({
        mainBundles: {
            app: bundles.app,
            lib: bundles.lib
        },
        autoBundles: ['src/app/pages'],
        base: 'dist/',
        bundleDest: 'static/genesys/js/bundles/',
        configDest: 'static/genesys/js/bundles-config.js',
        logStyle: (os.platform() === 'win32') ? 'generic' : null
    }, jspm);
});


gulp.task('polyfills', function(){
    return gulp.src([
        './static/genesys/js/vendor/dom4.js',
        './static/genesys/js/vendor/mutation-observer.js',
        './static/genesys/js/vendor/custom-elements.js',
        './static/genesys/js/vendor/es5-shim.min.js',
        './static/genesys/js/vendor/es5-sham.min.js',
        './static/genesys/js/vendor/babel-polyfill.js'
    ]).pipe(concat('polyfills.js'))
      .pipe(gulp.dest('./static/genesys/js/vendor/'))
})



gulp.task('html-bustcache:dist', function () {
    return gulp.src('./dist/static/genesys/**')
        .pipe(md5(10, './dist/**/*.html'));
});
