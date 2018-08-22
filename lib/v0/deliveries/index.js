
module.exports.create = {
  request: require('./create.request')
}

module.exports.update = {
  request: require('./update.request')
}
module.exports.items = {
  update: {
    request: require('./items').update.request
  },
  create: {
    request: require('./items').create
  }
}
