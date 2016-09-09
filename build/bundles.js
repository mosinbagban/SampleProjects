var lib = [
    'text',
    'whatwg-fetch',
    'aurelia-cookie',
    'aurelia-dialog',
    'aurelia-animator-css',
    'aurelia-bootstrapper',
    'aurelia-dependency-injection',
    'aurelia-event-aggregator',
    'aurelia-framework',
    'aurelia-history',
    'aurelia-history-browser',
    'aurelia-loader',
    'aurelia-loader-default',
    'aurelia-logging',
    'aurelia-logging-console',
    'aurelia-metadata',
    'aurelia-pal-browser',
    'aurelia-path',
    'aurelia-polyfills',
    'aurelia-route-recognizer',
    'aurelia-router',
    'aurelia-templating',
    'aurelia-templating-binding',
    'aurelia-templating-resources',
    'aurelia-templating-router',
    //
    'branding',
    //'common/utilities/branding-debugger',
    'voya-aurelia',
    'voya-component-utils',
    'voya-button',
    'voya-browser-support-notification',
    'voya-charts',
    'voya-expand-collapse',
    'voya-indicator',
    'voya-footer',
    'voya-tooltip',
    'voya-field',
    'voya-modal',
    'voya-notification',
    'voya-card',
    'voya-slider',
    'voya-tabs',
    'voya-table',
    'voya-header',
    'voya-validation'
];

module.exports = {
    'app': {
        includes : [
            'src/**/*.js',
            'src/**/*.html!text',
            'src/**/*.css!text'
        ],
        excludes : lib
    },
    'lib': {
        includes : lib
    }
};
