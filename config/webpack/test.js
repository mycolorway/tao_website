const merge = require('webpack-merge')
const environment = require('./environment')
const customConfig = require('./custom')

environment.plugins.get('Manifest').opts.writeToFileEmit = process.env.NODE_ENV !== 'test'
module.exports = merge(environment.toWebpackConfig(), customConfig)
