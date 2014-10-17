module.exports = function(config) {
    'use strict';

    var configuration = {

        // base path, that will be used to resolve files and exclude
        basePath: './',
 
        frameworks: ['jasmine'],
 
        files: [
            'bower_components/jquery/dist/jquery.min.js',
            'bower_components/lodash/dist/lodash.min.js',
            'bower_components/jasmine-jquery/lib/jasmine-jquery.js',

            'dist/vissense.js',

            'spec/**/*.js',
            // fixtures
            {pattern: 'spec/**/*.html', watched: true, served: true, included: false}
        ],

        exclude: [
        ],
 
        reporters: ['progress', 'coverage'],
 
        port: 3001,
 
        colors: true,
 
        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,
 
        autoWatch: true,
 
        //browsers: ['PhantomJS', 'Chrome', 'Firefox', 'IE', 'Opera'],
        browsers: ['PhantomJS', 'Chrome', 'Firefox', 'IE'],

        customLaunchers: {
          Chrome_without_security: {
            base: 'Chrome',
            flags: ['--disable-web-security']
          },
          Chrome_travis_ci: {
            base: 'Chrome',
            flags: ['--no-sandbox']
          }
        },

        preprocessors: {
          'dist/vissense.js': ['coverage']
        },

        coverageReporter: {
            reporters:[
              {type: 'lcov', dir:'dist/coverage/'}
            ]
        },

        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,
 
        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: true
    };

    if(process.env.TRAVIS){
        configuration.browsers = ['PhantomJS', 'Firefox', 'Chrome_travis_ci'];
    }

    config.set(configuration);
};