const webpack = require('webpack')

module.exports = (environment) => {
  // only load zh-cn locale config
  environment.plugins.append(
    'MomentPatch',
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /zh-cn/)
  )
}
