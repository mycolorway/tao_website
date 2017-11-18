module.exports = (environment) => {
  // skip svg file
  const fileRule = environment.loaders.get('file')
  fileRule.test = /\.(jpg|jpeg|png|gif|tiff|ico|eot|otf|ttf|woff|woff2)$/i

  const spriteLoaderConfig = {
    loader: 'svg-sprite-loader',
    options: {
      symbolId: 'icon-[name]',
      spriteModule: require.resolve('@mycolorway/tao_ui/frontend/javascripts/icons/sprite.coffee')
    }
  }

  environment.loaders.set('colored_icon', {
    test: /-colored\.svg/,
    use: [spriteLoaderConfig, 'svgo-loader']
  })

  environment.loaders.set('icon', {
    test: (modulePath) => {
      return /\.svg/.test(modulePath) && !/-colored\.svg/.test(modulePath)
    },
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
  })
}
