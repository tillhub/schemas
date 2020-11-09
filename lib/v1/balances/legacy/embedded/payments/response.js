const { oneOf } = require('../../../helpers/payload-or-null')
const base = require('./base')

module.exports = {
  type: 'object',
  additionalProperties: false,
  properties: {
    id: {
      type: 'string',
      example: '860defb8-5598-421d-9da4-f0826e767536',
      format: 'uuid',
      description: 'The uuid v4 that is generated on the API when a balance is received. This id can be used for idempotency'
    },
    update_id: {
      type: 'integer'
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
      description: 'The server update time of this transaction.'
    },
    fr_balance_id: {
      type: 'integer',
      description: 'Parent balance id.'
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
    ...base
  }
}
