const base = require('./base')

module.exports = {
  type: 'object',
  additionalProperties: false,
  required: [
    'type',
    'qty',
    'name',
    'currency',
    'tax_amount',
    'tax_amount_total'
  ],
  properties: {
    ...base
  }
}
