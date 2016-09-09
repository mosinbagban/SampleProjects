exports.config = {

    /**
     * server configurations
     */
    //host: '',
    //port: ,

    /**
     * specify test files
     */
    specs: [
        './test/**/*.js' // <- use to test entire app
    ],
    exclude: [],

    /**
     * capabilities
     */
    capabilities: [
        {browserName: 'phantomjs'}
        //{browserName: 'chrome'}
        //{browserName: 'firefox'}
    ],

    /**
     * test configurations
     */
    logLevel: 'silent',
    coloredLogs: true,
    screenshotPath: './test/screenshots/',
    baseUrl: 'http://localhost:9200',
    waitforTimeout: 30000,
    framework: 'mocha',

    reporters: ['dot'],
    //reporters: ['spec'],
    reporterOptions: {
        outputDir: './'
    },

    mochaOpts: {
        ui: 'bdd'
    },

    /**
     * hooks
     */
    onPrepare: function() {
        console.log('start tests');
    },
    onComplete: function() {
        console.log('end tests');
    }

};