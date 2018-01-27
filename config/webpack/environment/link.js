const path = require('path')

module.exports = (environment) => {
  // for 'yarn link' in development
  environment.config.set('resolve.alias', {
    jquery: path.resolve('node_modules', 'jquery'),
    lodash: path.resolve('node_modules', 'lodash'),
    moment: path.resolve('node_modules', 'moment'),
    turbolinks: path.resolve('node_modules', 'turbolinks'),
    "svg-baker-runtime": path.resolve('node_modules', 'svg-baker-runtime'),
    "core-js": path.resolve('node_modules', 'core-js'),
    "rails-ujs": path.resolve('node_modules', 'rails-ujs'),
    "@mycolorway/tao": path.resolve('node_modules', '@mycolorway/tao'),
    "@mycolorway/tao_ui": path.resolve('node_modules', '@mycolorway/tao_ui'),
    "@mycolorway/tao_form": path.resolve('node_modules', '@mycolorway/tao_form')
  })
}
