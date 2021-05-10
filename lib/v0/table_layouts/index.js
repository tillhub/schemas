module.exports.register = {
  create: {
    request: require('./upsert.request'),
    response: require('./upsert.response')
  },
  upsert: {
    request: require('./upsert.request'),
    response: require('./upsert.response')
  },
  get: {
    response: require('./get.response')
  }
}

module.exports.get = {
  response: require('./get.response')
}
