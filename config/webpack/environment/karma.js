module.exports = (environment) => {
  environment.plugins.get('Manifest').opts.writeToFileEmit = false

  environment.loaders.append('istanbul-instrumenter', {
    test: /\.coffee$/,
    enforce: 'post',
    loader: 'istanbul-instrumenter-loader',
    query: {
      esModules: true
    },
    exclude: [/node_modules/, /frontend\/test/]
  })

}
