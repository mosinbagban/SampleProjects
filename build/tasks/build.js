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
                //'html-bustcache:dist'
                // 'test'
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
    .pipe(gulp.dest('./dist/static/public/js'));
});

gulp.task('index:dev', function () {
    // gulp.src('./myvoya/index.html')
    //     .pipe(preprocess({
    //         context: {
    //             BUILD_TYPE: 'dev'
    //         }
    //     }))
    //     .pipe(gulp.dest('./myvoya/static/public'));
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
        //.pipe(gulp.dest('./dist/myvoya'));
        .pipe(gulp.dest('./dist/'));
    // gulp.src([
    //     './chat/public/logout.html',
    //     './chat/public/error.html'
    //     ])
    //     .pipe(preprocess({
    //         context: {
    //             BUILD_TYPE: 'dist'
    //         }
    //     }))
    //     //.pipe(gulp.dest('./dist/myvoya'));
    //     .pipe(gulp.dest('./dist/chat/public/'));
});


gulp.task('copy:chatpage', function () {

   gulp.src("./dist/index.html")
    .pipe(rename("/StartGenesysChat.jsp"))
    .pipe(replace('// FOR HTML only', '/* // FOR HTML only'))
    .pipe(replace('// FOR HTML End', '*/ // FOR HTML End'))
    .pipe(replace('/* // FOR JSP Only', '// FOR JSP Only'))
    .pipe(replace('*/ // FOR JSP End', '// FOR JSP End'))
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
        //.pipe(gulp.dest('./dist/myvoya'));
        .pipe(gulp.dest('./dist/mga-pages/'));
});

gulp.task('js:dev', [], function () {
    voyaBuilder({
        mainBundles: {
            lib: bundles.lib
        },
        base: '',
        bundleDest: 'static/public/js/bundles/',
        configDest: 'static/public/js/bundles-config.js',
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
        bundleDest: 'static/public/js/bundles/',
        configDest: 'static/public/js/bundles-config.js',
        logStyle: (os.platform() === 'win32') ? 'generic' : null
    }, jspm);
});


gulp.task('polyfills', function(){
    return gulp.src([
        './static/public/js/vendor/dom4.js',
        './static/public/js/vendor/mutation-observer.js',
        './static/public/js/vendor/custom-elements.js',
        './static/public/js/vendor/es5-shim.min.js',
        './static/public/js/vendor/es5-sham.min.js',
        './static/public/js/vendor/babel-polyfill.js'
    ]).pipe(concat('polyfills.js'))
      .pipe(gulp.dest('./static/public/js/vendor/'))
})


// gulp.task('html-bustcache:dev', function () {
//   return gulp.src(['./index.html'])
//     .pipe(replace('bar', 'foo'))
//     .pipe(gulp.dest('build/file.txt'));

// });

gulp.task('html-bustcache:dist', function () {
    return gulp.src('./dist/static/public/**')
        .pipe(md5(10, './dist/**/*.html'));
});
