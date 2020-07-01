const base = require('./base')

module.exports = {
  type: 'object',
  additionalProperties: false,
  required: [],
  properties: {
    ...base,
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
    }
  }
}
