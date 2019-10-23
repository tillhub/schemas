const base = require('./base')
const itemsCreate = require('./items/create.request')
const paymentsCreate = require('./payments/create.request')

module.exports = {
  $id: 'https://schemas.tillhub.com/v1/transactions.legacy.create.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  additionalProperties: false,
  required: [
    'date',
    'type_name',
    'cartitems',
    'payments'
  ],
  properties: {
    ...base,
    cartitems: {
      type: 'array',
      minItems: 1,
      items: {
        ...itemsCreate
      }
    },
    payments: {
      type: 'array',
      items: {
        ...paymentsCreate
      }
    }
  }
}
