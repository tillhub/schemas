const base = require('./base')

module.exports = {
  ...base,
  id: {
    type: 'string',
    maxLength: 128
  },
  created_at: {
    type: 'string',
    format: 'date-time'
  },
  updated_at: {
    type: 'string',
    format: 'date-time'
  },
  deleted: {
    type: 'boolean'
  }
}
