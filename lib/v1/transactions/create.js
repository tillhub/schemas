const base = require('./base')
const itemsCreate = require('./components/items/create.request')
const paymentsCreate = require('./components/payments/create.request')
const statusCreate = require('../statuses/create.request')

module.exports.request = {
  $id: 'https://schemas.tillhub.com/v1/transactions.create.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  additionalProperties: false,
  required: [
    'date',
    'type',
    'items',
    'payments'
  ],
  properties: {
    ...base,
    items: {
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
    },
    status: {
      ...statusCreate
    }
  }
}
