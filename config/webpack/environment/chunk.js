const webpack = require('webpack')

module.exports = (environment) => {
  environment.plugins.append(
    'CommonsChunkVendor',
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: (module, count) => {
        // this assumes your vendor imports exist in the node_modules directory
        return module.context && module.context.indexOf('node_modules') !== -1 && count > 1;
      }
    })
  )

  environment.plugins.append(
    'CommonsChunkManifest',
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity
    })
  )
}
