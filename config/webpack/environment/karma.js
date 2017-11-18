
module.exports = (environment) => {
  environment.plugins.get('Manifest').opts.writeToFileEmit = process.env.NODE_ENV !== 'test'

  // environment.loaders.set('istanbul-instrumenter', {
  //   test: /\.coffee$/,
  //   enforce: 'post',
  //   loader: 'istanbul-instrumenter-loader',
  //   query: {
  //     esModules: true
  //   },
  //   exclude: [/node_modules/, /frontend\/test/]
  // })
}
