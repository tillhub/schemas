const base = require('./base')
const statusCreate = require('../../statuses/create.request')

module.exports = {
  $id: 'https://schemas.tillhub.com/v1/gastro_orders.deltas.create.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  additionalProperties: false,
  required: [
    'status',
    'client_id',
    'order',
    'index',
    'dev_uuid',
    'register',
    'date',
    'type',
    'items'
  ],
  properties: {
    status: {
      ...statusCreate
    },
    ...base
  }
}
