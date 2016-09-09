var gulp = require('gulp');
var jscs = require('gulp-jscs');
var stylish = require('gulp-jscs-stylish');
var eslint = require('gulp-eslint');

//temporarily commenting out jscs as it is hanging on windows machines
gulp.task('lint', ['eslint', /*'jscs'*/]);

gulp.task('eslint', function () {
    return gulp.src(['./src/**/*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('jscs', function() {
    return gulp.src('./src/**/*.js')
        .pipe(jscs())
        .on('error', function() {})
        .pipe(stylish());
});

// // running this task will reformat all code in the src directory
gulp.task('jscs:fix', function() {
    return gulp.src('./src/**/*.js')
        .pipe(jscs({fix: true}))
        .on('error', function() {})
        .pipe(stylish())
        .pipe(gulp.dest('./src'));
});
