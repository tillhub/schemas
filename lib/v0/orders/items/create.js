const base = require('./base')

module.exports = {
  type: 'object',
  additionalProperties: false,
  required: [
    'order_qty',
    'product'
  ],
  properties: base
}
