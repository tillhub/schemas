const base = require('./base')
const { oneOf } = require('../../../../helpers/payload-or-null')

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
    update_id: {
      type: 'integer'
    },
    temporary_id: oneOf({
      type: 'string'
    }),
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
    },
    ...base
  }
}
