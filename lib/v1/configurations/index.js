
module.exports.create = {
  request: require('./create.request')
}
module.exports.update = {
  request: require('./update.request')
}
module.exports.patch = {
  request: require('./patch.request')
}

module.exports.bulk_update = {
  request: require('./bulk_update.request')
}

module.exports.bulk_fetch = {
  request: require('./bulk_fetch.request')
}

module.exports.users = require('./users')
