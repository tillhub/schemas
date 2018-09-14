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
      minLength: 1,
      items: {
        required: [
          'product',
          'delivery'
        ],
        ...base
      }
    }
  }
}
