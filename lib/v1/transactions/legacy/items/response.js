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
    ...base,
    account: {
      type: 'string',
      format: 'uuid',
      description: 'The applicable Tillhub (revenue or EXPENSE) account.', // expense_account goes here if type == expense
      example: 'a5380b42-6025-49de-bb1d-c9357df96506'
    },
    product_group: {
      type: 'string',
      format: 'uuid',
      description: 'The Tillhub product group resource reference ID.',
      example: '897bac99-f98e-433a-bca0-19acc380fb12'
    }
  }
}
