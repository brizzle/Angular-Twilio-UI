// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular/cli'],
    plugins: [
      require('karma-jasmine'),
      // require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('karma-safari-launcher'),
      require('@angular/cli/plugins/karma')
    ],
    client:{
      clearContext: false, // leave Jasmine Spec Runner output visible in browser
      // captureConsole: true,
      // browserConsoleLogOptions: {
      //   level: "log",
      //   format: '%b %T: %m',
      //   terminal: true
      // }
    },
    coverageIstanbulReporter: {
      reports: [ 'html', 'lcovonly' ],
      fixWebpackSourcePaths: true
    },
    angularCli: {
      environment: 'dev'
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    // logLevel: config.LOG_INFO,
    logLevel: config.LOG_DEBUG,
    autoWatch: true,
    // browsers: ['Chrome'],
    browsers: ['Safari'],
    singleRun: false,
    // customLaunchers: {
    //   // From the CLI. Not used here but interesting
    //   // chrome setup for travis CI using chromium
    //   Chrome_travis_ci: {
    //     base: 'Chrome',
    //     flags: ['--no-sandbox']
    //   }
    // }
  });
};
