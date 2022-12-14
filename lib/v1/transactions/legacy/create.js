const { getEvent } = require('../../../common/webhooks')
const statusCreate = require('../../statuses/create.request')
const base = require('./base')
const response = require('./response')
const itemsCreate = require('./items/create.request')
const paymentsCreate = require('./payments/create.request')

module.exports.request = {
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
    },
    status: {
      ...statusCreate
    }
  }
}

module.exports.event = {
  $id: 'https://schemas.tillhub.com/v1/transactions.legacy.create.event.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  ...getEvent(response, { eventEntityExample: 'transaction' })
}
