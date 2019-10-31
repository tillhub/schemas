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
    updated_at: {
      type: 'string',
      format: 'date-time',
      example: '2018-11-04T23:18:43.075Z',
      description: 'The server creation time of this transaction.'
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
