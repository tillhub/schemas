const { oneOf } = require('../../../../helpers/payload-or-null')
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
    _id: {
      deprecated: true,
      ...oneOf({
        type: 'string',
        format: 'uuid',
        example: '97074aa7-ed27-464c-890e-0b47ab153b8a',
        description: 'Temporary hack for id-functionality (which is Int)'
      })
    },
    fr_transaction_id: {
      deprecated: true,
      ...oneOf({
        type: 'number'
      })
    },
    updated_at: {
      type: 'string',
      format: 'date-time',
      example: '2018-11-04T23:18:43.075Z',
      description: 'The server upodate time of this transaction.'
    },
    ...base
  }
}
