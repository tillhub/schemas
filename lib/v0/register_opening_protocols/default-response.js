const base = require('./base')

module.exports = {
  ...base,
  id: {
    type: 'string',
    example: '860defb8-5598-421d-9da4-f0826e767536',
    format: 'uuid',
    description: 'The uuid v4 that is generated on the API when a transaction is received. This id can be used for idempotency'
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
  }
}
