const webpackConfig = require('./config/webpack/test.js')
delete webpackConfig.entry
delete webpackConfig.output

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
