const { oneOf } = require('../../../helpers/payload-or-null')
const dateObject = require('../../../common/date_object')
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
      description: 'The server creation time of this transaction.',
      ...dateObject
    },
    updated_at: {
      description: 'The server update time of this transaction.',
      ...dateObject
    },
    temporary_id: oneOf({
      type: 'string'
    }),
    _id: {
      deprecated: true,
      ...oneOf({
        type: 'string',
        format: 'uuid',
        example: '97074aa7-ed27-464c-890e-0b47ab153b8a',
        description: 'Temporary hack for id-functionality (which is Int)'
      })
    },
    fr_transaction_id: {
      deprecated: true,
      ...oneOf({
        type: 'number'
      })
    },
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
