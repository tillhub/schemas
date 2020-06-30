const base = require('./base')

module.exports = {
  type: 'object',
  additionalProperties: false,
  required: [],
  properties: {
    id: {
      type: 'string',
      format: 'uuid',
      description: 'The item resource reference ID.'
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
      description: 'The server update time of this transaction. Transactions are immutable in and out themselves, however statuses might change, which is reflected in this value. This can for example happen if a signing request for this transaction was not possible and needed to be dealt with later.'
    },
    status: {
      type: 'string',
      description: 'The current status transition of this transaction. A regular transaction will receive the status `complete` immediately. When signing is requested `complete` will only be assigned after signing.',
      enum: [
        'signing_requested',
        'complete'
      ]
    },
    ...base
  }
}
