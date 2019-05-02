module.exports.oneOf = function oneOfOrNull (payload, options = {}) {
  let item
  if (Array.isArray(payload)) {
    item = payload
  } else {
    item = [payload]
  }

  const obj = {
    oneOf: [
      ...item,
      {
        type: 'null'
      }
    ]
  }

  if (options.default !== undefined) {
    obj.default = options.default
  }

  return obj
}

module.exports.anyOf = function anyOfOrNull (payload) {
  let item
  if (Array.isArray(payload)) {
    item = payload
  } else {
    item = [payload]
  }

  return {
    anyOf: [
      ...item,
      {
        type: 'null'
      }
    ]
  }
}
