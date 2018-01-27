const { environment } = require('@rails/webpacker')

function config(...names) {
  names.forEach(name => {
    require(`./${name}`)(environment)
  })
}

config('coffee', 'icon', 'link', 'moment', 'lodash', 'chunk')

if (process.env.NODE_ENV === 'test') {
  config('karma')
} else {
  config('bundle_analyzer')
}

module.exports = environment
