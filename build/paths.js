var appRoot = 'src/';
var outputRoot = 'dist/';
var exportSrvRoot = 'export/';

module.exports = {
    root: appRoot,
    js: appRoot + '**/*.js',
    html: appRoot + '**/*.html',
    scss: appRoot + '**/*.scss',
    output: outputRoot,
    exportSrv: exportSrvRoot,
    doc: './doc',
    e2eSpecsSrc: 'test/e2e/src/**/*.js',
    e2eSpecsDist: 'test/e2e/dist/'
};
