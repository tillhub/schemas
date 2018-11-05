module.exports.oneOf = function oneOfOrNull (payload) {
  let item
  if (Array.isArray(payload)) {
    item = payload
  } else {
    item = [payload]
  }
  return {
    oneOf: [
      ...item,
      {
        type: 'null'
      }
    ]
  }
}

module.exports.anyOf = function anyOfOrNull (payload) {
  let item
  if (Array.isArray(payload)) {
    item = payload
  } else {
    item = [payload]
  }

  return {
    oneOf: [
      ...item,
      {
        type: 'null'
      }
    ]
  }
}
