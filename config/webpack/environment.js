const path = require('path')
const config = require('@rails/webpacker/package/config');
const webpack = require('webpack')
const LodashPlugin = require('lodash-webpack-plugin');
const { environment } = require('@rails/webpacker')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

// skip svg file
const fileLoader = environment.loaders.get('file')
fileLoader.test = /\.(jpg|jpeg|png|gif|tiff|ico|eot|otf|ttf|woff|woff2)$/i

// support coffeescript 2.0
const babelLoader = environment.loaders.get('babel')
babelLoader.test = /\.(coffee|js|jsx)?(\.erb)?$/
babelLoader.include = [
  path.resolve(config.source_path),
  /@mycolorway(?!.*\/node_modules)/,
  /tao_(?!.*\/node_modules)/
]
babelLoader.options.presets = ['env']
babelLoader.options.plugins = [
  'transform-runtime',
  'lodash'
]
delete babelLoader.exclude

environment.loaders.set('icon', {
  test: /\.svg$/,
  use: [{
    loader: 'svg-sprite-loader',
    options: {
      symbolId: 'icon-[name]',
      spriteModule: require.resolve('@mycolorway/tao_ui/frontend/javascripts/icons/sprite.coffee')
    }
  }, {
    loader: 'svgo-loader',
    options: {
      plugins: [{
        removeAttrs: {
          attrs: ['fill']
        }
      }]
    }
  }]
})

environment.loaders.set('tao', {
  test: require.resolve('@mycolorway/tao'),
  use: [{
    loader: 'expose-loader',
    options: 'Tao'
  }]
})

if (process.env.NODE_ENV !== 'test') {
  environment.plugins.set(
    'CommonsChunkVendor',
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: (module) => {
        // this assumes your vendor imports exist in the node_modules directory
        return module.context && module.context.indexOf('node_modules') !== -1;
      }
    })
  )

  environment.plugins.set(
    'CommonsChunkManifest',
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity
    })
  )
}

// only load zh-cn locale config
environment.plugins.set(
  'MomentPatch',
  new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /zh-cn/)
)

// cherry pick loadash
environment.plugins.set(
  'LodashPlugin',
  new LodashPlugin
)

environment.plugins.set(
  'BundleAnalyzer',
  new BundleAnalyzerPlugin({
    analyzerMode: 'static',
    openAnalyzer: false
  })
)

module.exports = environment
