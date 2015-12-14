// Karma configuration
// Generated on Fri Dec 11 2015 05:06:36 GMT+0000 (UTC)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai-as-promised', 'chai-dom', 'chai', 'sinon-chai'],


    // list of files / patterns to load in the browser
    files: [
      'test/testEntry.js'
    ],


    // list of files to exclude
    exclude: [
    ],

  
    client: {
      mocha: {
        timeout: 10000
      }
    },
    
    webpack: Object.assign({devtool: 'inline-source-map'}, require('./webpack.config'), {externals: {}}),
    
    
    webpackServer: {
      noInfo: true
    },
    
    
    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'test/testEntry.js': ['webpack', 'sourcemap'],
      'react-7segments.js': 'coverage'
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec', 'coverage', 'coveralls'],

    
    coverageReporter: {
      type: 'lcov', // lcov or lcovonly are required for generating lcov.info files
      dir: 'coverage/'
    },
    
    
    // web server port
    port: process.env.PORT || 9876,
    hostname: process.env.IP || 'localhost',
    

    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultanous
    concurrency: Infinity
  })
}
