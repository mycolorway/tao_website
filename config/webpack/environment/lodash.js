const LodashPlugin = require('lodash-webpack-plugin');

module.exports = (environment) => {
  // cherry pick loadash
  environment.plugins.append(
    'LodashPlugin',
    new LodashPlugin
  )
}
