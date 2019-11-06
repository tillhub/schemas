const { oneOf } = require('../../../helpers/payload-or-null')
const statusResponse = require('../components/embedded/status/response')
const base = require('./base')
const items = require('./items/response')
const payments = require('./payments/response')

module.exports = {
  type: 'object',
  additionalProperties: false,
  properties: {
    id: {
      type: 'string',
      example: '860defb8-5598-421d-9da4-f0826e767536',
      format: 'uuid',
      description: 'The uuid v4 that is generated on the API when a transaction is received. This id can be used for idempotency'
    },
    update_id: {
      type: 'integer'
    },
    created_at: {
      type: 'string',
      format: 'date-time',
      example: '2018-11-04T23:18:43.075Z',
      description: 'The server creation time of this transaction.'
    },
    updated_at: {
      type: 'string',
      format: 'date-time',
      example: '2018-11-04T23:18:43.075Z',
      description: 'The server creation time of this transaction.'
    },
    temporary_id: oneOf({
      type: 'string'
    }),
    ...base,
    items: {
      type: 'array',
      items: {
        ...items
      }
    },
    payments: {
      type: 'array',
      items: {
        ...payments
      }
    },
    status: {
      ...statusResponse
    }
  }
}
