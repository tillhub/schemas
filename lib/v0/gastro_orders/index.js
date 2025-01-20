module.exports.locks = {
  upsert: {
    request: require('./locks/upsert').request,
    response: require('./locks/upsert').response
  }
}
