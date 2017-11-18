const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = (environment) => {
  environment.plugins.set(
    'BundleAnalyzer',
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false
    })
  )
}
