const base = require('./base')
const statusResponse = require('../../statuses/response')

module.exports = {
  $id: 'https://schemas.tillhub.com/v1/gastro_orders.deltas.create.response.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  additionalProperties: false,
  required: [
    'id',
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
    id: {
      type: 'string',
      format: 'uuid',
      description: 'The resource reference ID for this state.'
    },
    created_at: {
      type: 'string',
      format: 'date-time',
      example: '2018-11-04T23:18:43.075Z',
      description: 'The server creation time of this state.'
    },
    updated_at: {
      type: 'string',
      format: 'date-time',
      example: '2018-11-04T23:18:43.075Z',
      description: 'The server update time of this state.'
    },
    status: {
      ...statusResponse
    },
    ...base
  }
}
