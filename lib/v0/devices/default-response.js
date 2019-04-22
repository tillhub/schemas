const base = require('./base')

module.exports = {
  ...base,
  id: {
    type: 'string',
    format: 'uuid'
  },
  created_at: {
    type: 'string',
    format: 'date-time'
  },
  client_account: {
    type: 'string'
  },
  client_id: {
    oneOf: [
      {
        type: 'string'
      },
      {
        type: 'null'
      }
    ]
  }
}
