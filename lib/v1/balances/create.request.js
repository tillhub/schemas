const base = require('./base')

module.exports = {
  $id: 'https://schemas.tillhub.com/v1/balances.create.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  additionalProperties: false,
  required: [
    'date_opening',
    'date_closing',
    'branch',
    'register',
    'totals',
    'revenues',
    'payments',
    'taxes',
    'tips',
    'cash_units'
  ],
  properties: {
    ...base
  }
}
