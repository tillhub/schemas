const amount = require('../../../../common/amount')
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
    transaction: {
      type: 'string',
      format: 'uuid',
      description: 'The transaction resource reference ID.'
    },
    created_at: {
      type: 'string',
      format: 'date-time',
      example: '2018-11-04T23:18:43.075Z',
      description: 'The server creation time of this transaction.'
    },
    amount: {
      ...amount,
      description: 'The payable amount on the units qty base of 1.'
    },
    amount_total: {
      ...amount,
      description: 'The payable amount. Amount multiplied by qty.'
    },
    revenue: {
      ...amount,
      description: 'The total of this item excluding decrements like discounts.'
    },
    ...base,
    insert_id: {
      type: 'number',
      example: '128',
      description: 'The sequential database insert ID. Consecutiveness is not guaranteed.'
    },
    client_account: {
      type: 'string',
      minLength: 32,
      maxLength: 36,
      example: '061f91a3-eba2-40b8-9a76-115189d6741e',
      description: 'The Tillhub client account ID. Note: this will usually be a uuid v4, however you might receive a capitalised dash-stripped version of it, if you hold a legsacy account.'
    },
    stock: {
      default: null,
      ...oneOf({
        type: 'string',
        description: 'The Tillhub stock resource reference ID. Stock is the tracking system on a per location per product basis.',
        example: '47db52a1-c280-4891-b510-6adc0439b262'
      })
    },
    stock_change: {
      default: null,
      ...oneOf({
        type: 'object',
        description: 'The embedded stock change.'
      })
    },
    stock_book_item: {
      default: null,
      ...oneOf({
        type: 'string',
        description: 'The Tillhub stock book resource reference ID. Stock book items describe the stock change, e.g. from / to, qty etc..',
        example: '2b271662-e9d0-4777-8cb2-e58e3d53fc3f'
      })
    }
  }
}
