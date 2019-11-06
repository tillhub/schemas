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
  article: oneOf({
    type: 'string',
    format: 'uuid'
  }),
  branch: {
    anyOf: [
      {
        type: 'string',
        format: 'uuid',
        minLength: 1,
        maxLength: 64
      },
      {
        type: 'null'
      }
    ]
  }
}
