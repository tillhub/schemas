const { oneOf } = require('../../../../helpers/payload-or-null')
const dateObject = require('../../../../common/date_object')
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
      description: 'The server creation time of this transaction.',
      ...dateObject
    },
    updated_at: {
      description: 'The server update time of this transaction.',
      ...dateObject
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
    change: oneOf({
      type: 'integer',
      example: 800,
      description: 'The change amount calculated by the API based on tx-top-level change value and attribution to one of the payments'
    }),
    amount_final: oneOf({
      type: 'integer',
      example: 1200,
      description: 'The effectively payed amount calculated by the API, \'amount_final\' = \'amount\' - \'change\''
    }),
    ...base
  }
}
