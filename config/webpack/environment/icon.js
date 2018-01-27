const _ = require('lodash')

module.exports = (environment) => {

  const fileRule = environment.loaders.get('file')
  fileRule.exclude = /\.svg/

  const spriteLoaderConfig = {
    loader: 'svg-sprite-loader',
    options: {
      symbolId: 'icon-[name]',
      spriteModule: require.resolve('@mycolorway/tao_ui/frontend/javascripts/icons/sprite.coffee')
    }
  }

  environment.loaders.append('icon', {
    enforce: 'pre',
    oneOf: [{
      test: /-colored\.svg/,
      use: [spriteLoaderConfig, 'svgo-loader']
    }, {
      test: /\.svg/,
      use: [spriteLoaderConfig, {
        loader: 'svgo-loader',
        options: {
          plugins: [{
            removeAttrs: {
              attrs: ['fill']
            }
          }]
        }
      }]
    }]
  })

}
