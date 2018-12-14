const base = require('./base')

module.exports = {
  type: 'object',
  additionalProperties: false,
  required: [
    'account',
    'payment_option',
    'cost_center',
    'type',
    'name',
    'currency',
    'amount_total',
    'amount_tip',
    'amount_discrepancy'
  ],
  properties: {
    ...base
  }
}
