const base = require('./base')

module.exports = {
  type: 'object',
  additionalProperties: false,
  required: [
    'account',
    'payment_option',
    'type',
    'name',
    'currency',
    'amount_total',
    'tip_total',
    'amount_given',
    'amount_requested'
  ],
  properties: {
    ...base
  }
}
