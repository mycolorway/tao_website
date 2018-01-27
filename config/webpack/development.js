const environment = require('./environment')

console.log(environment.toWebpackConfig().module.rules[3]);

module.exports = environment.toWebpackConfig()
