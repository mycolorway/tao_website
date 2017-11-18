const webpack = require('webpack')

module.exports = (environment) => {
  // only load zh-cn locale config
  environment.plugins.set(
    'MomentPatch',
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /zh-cn/)
  )
}
