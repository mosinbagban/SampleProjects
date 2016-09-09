var gulp = require('gulp');
var selenium = require('selenium-standalone');
var child_process = require('child_process');
var path = require('path');
var os = require('os');
require('colors');

var cp = child_process;


gulp.task('selenium:install', function (callback) {
    var runner = osSpawn(path.normalize('node_modules/.bin/selenium-standalone'), ['install'], {cwd: '.', stdio: 'inherit'});

    runner.on('exit', function () {
        callback();
        process.exit();
    })
});

gulp.task('test', ['serve:dist'], function (callback) {
    selenium.start({}, function () {
        var runner = osSpawn(path.normalize('node_modules/.bin/wdio'), ['wdio.conf.js'], {cwd: '.', stdio: 'inherit'});

        runner.on('exit', function () {
            callback();
            process.exit();
        });
    });
});

gulp.task('test:ci', ['serve:dist'], function (callback) {

    selenium.start({}, function () {
        var runner = osSpawn(path.normalize('node_modules/.bin/wdio'), ['wdio.conf.saucelabs.js'], {cwd: '.', stdio: 'inherit'});

        runner.on('exit', function () {
            callback();
            process.exit();
        });
    });

    // var runner = osSpawn(path.normalize('node_modules/.bin/wdio'), ['wdio.conf.saucelabs.js'], {cwd: '.', stdio: 'inherit'});

    // runner.on('exit', function () {
    //     callback();
    //     process.exit();
    // });
});

function osSpawn(cmd, args, options) {
    if (os.platform() === 'win32') {
        args.unshift(cmd);
        args.unshift('/c');
        return cp.spawn('cmd', args, options);
    } else {
        return cp.spawn(cmd, args, options);
    }
}

