const base = require('./base')

module.exports = {
  type: 'object',
  additionalProperties: false,
  properties: {
    ...base
  }
}
