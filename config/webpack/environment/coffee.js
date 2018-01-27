const path = require('path')
const config = require('@rails/webpacker/package/config');

module.exports = (environment) => {
  // support coffeescript 2.0
  const babelRule = environment.loaders.get('babel')
  babelRule.include = [
    path.resolve(config.source_path),
    /@mycolorway(?!.*\/node_modules)/,
    /tao_(?!.*\/node_modules)/ // for yarn link
  ]
  delete babelRule.exclude

  const babelLoader = babelRule.use.find(item => {
    return item.loader === 'babel-loader'
  })
  babelLoader.options.babelrc = false
  babelLoader.options.presets = ['env']
  babelLoader.options.plugins = [
    'transform-runtime',
    'lodash',
    'syntax-dynamic-import'
  ]

  environment.loaders.append('coffee', {
    test: /\.coffee(\.erb)?$/,
    use: [babelLoader, {
      loader: 'coffee-loader'
    }]
  })
}
