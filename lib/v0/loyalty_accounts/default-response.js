const { oneOf } = require('../../helpers/payload-or-null')
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
  updated_at: {
    type: 'string',
    format: 'date-time'
  },
  activated_at: oneOf({
    type: 'string',
    format: 'date-time'
  })
}
