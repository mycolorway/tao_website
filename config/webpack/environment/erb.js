module.exports = (environment) => {
  const sassRule = environment.loaders.get('sass')
  sassRule.test = /\.(scss|sass)(\.erb)?$/i

  environment.loaders.append('erb', {
    test: /\.erb$/,
    enforce: 'pre',
    exclude: /node_modules/,
    use: [{
      loader: 'rails-erb-loader',
      options: {
        runner: 'bin/rails runner'
      }
    }]
  })
}
