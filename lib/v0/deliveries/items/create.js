const base = require('./base')

module.exports = {
  type: 'object',
  additionalProperties: false,
  required: [
    'items'
  ],
  properties: {
    items: {
      type: 'array',
      minItems: 1,
      items: {
        ...base
      }
    }
  }
}
