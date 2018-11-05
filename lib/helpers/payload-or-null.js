module.exports.oneOf = function oneOfOrNull (payload) {
  return {
    oneOf: [
      payload,
      {
        type: 'null'
      }
    ]
  }
}

module.exports.anyOf = function anyOfOrNull (payload) {
  return {
    oneOf: [
      payload,
      {
        type: 'null'
      }
    ]
  }
}
