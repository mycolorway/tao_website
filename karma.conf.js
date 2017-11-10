const webpackConfig = require('./config/webpack/test.js')

module.exports = (config) => {
  config.set({
    frameworks: ['mocha'],

    reporters: ['mocha'],

    browsers: ['ChromeHeadless'],

    files: ['frontend/test/index.coffee'],

    preprocessors: {
      'frontend/test/index.coffee': ['webpack']
    },

    webpack: webpackConfig,

    client: {
      mocha: {
        reporter: 'html'
      }
    }
  });
}
