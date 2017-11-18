const { environment } = require('@rails/webpacker')

function config(...names) {
  names.forEach(name => {
    require(`./${name}`)(environment)
  })
}

config('coffeescript', 'icon', 'link', 'moment', 'lodash', 'bundle_analyzer')

if (process.env.NODE_ENV === 'test') {
  config('karma')
} else {
  config('chunk')
}

module.exports = environment
