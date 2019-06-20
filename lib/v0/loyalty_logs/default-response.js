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
  }
}
