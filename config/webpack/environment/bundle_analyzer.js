const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = (environment) => {
  environment.plugins.append(
    'BundleAnalyzer',
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false
    })
  )
}
