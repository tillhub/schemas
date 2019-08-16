const base = require('./base')

module.exports = {
  ...base,
  id: {
    type: 'string',
    format: 'uuid',
    description: 'The item resource reference ID.'
  },
  created_at: {
    type: 'string',
    format: 'date-time'
  },
  updated_at: {
    type: 'string',
    format: 'date-time'
  }
}
