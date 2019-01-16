const base = require('./base')

module.exports = {
  type: 'object',
  additionalProperties: false,
  required: [
    'account',
    'account_change',
    'payment_option',
    'type',
    'name',
    'currency',
    'amount_total',
    'amount_tip',
    'amount_change',
    'amount_counted',
    'amount_discrepancy'
  ],
  properties: {
    id: {
      type: 'string',
      example: '860defb8-5598-421d-9da4-f0826e767536',
      format: 'uuid',
      description: 'The uuid v4 that is generated on the API when a transaction is received. This id can be used for idempotency'
    },
    created_at: {
      type: 'string',
      format: 'date-time',
      example: '2018-11-04T23:18:43.075Z',
      description: 'The server creation time of this transaction.'
    },
    channel: {
      type: 'string',
      example: 'api',
      description: 'The channel of which this transaction originated from. Usually this is the API, but may be experimental implementations of other channels.',
      enum: [
        'api',
        'blockchain'
      ]
    },
    client_account: {
      type: 'string',
      minLength: 32,
      maxLength: 36,
      example: '061f91a3-eba2-40b8-9a76-115189d6741e',
      description: 'The Tillhub client account ID. Note: this will usually be a uuid v4, however you might receive a capitalised dash-stripped version of it, if you hold a legsacy account.'
    },
    ...base,
    receipts: {
      type: 'array',
      example: '["07457072-8b94-4461-806d-baaf6eeea010"]',
      description: 'A list of embeddable receipts.',
      anyOf: [
        {
          items: {
            type: 'string',
            format: 'uuid',
            description: 'Unembedded Tillhub receipt resource IDs'
          }
        },
        {
          items: {
            type: 'object',
            description: 'Embedded Tillhub receipt resources'
          }
        }
      ],
      default: []
    },
    insert_id: {
      type: 'number',
      example: '128',
      description: 'The sequential database insert ID. Consecutiveness is not guaranteed.'
    },
    hashes: {
      type: 'object',
      description: 'Hashes to check consistency of the data fields of this transactions that are hashable.',
      properties: {
        sha512_v0: {
          type: 'string',
          minLength: 512,
          maxLength: 512,
          description: 'The v0 implementation of the balance hash '
        }
      }
    },
    self: {
      type: 'object',
      description: 'All references to this balance',
      properties: {
        uri: {
          type: 'string',
          format: 'url'
        },
        block_balance: {
          type: 'string',
          maxLength: 512,
          default: null
        }
      }
    },
    block: {
      type: 'object',
      description: 'The block this balance is stored in and its references.',
      properties: {
        id: {
          type: 'string',
          description: 'The actual block.'
        },
        previous: {
          type: 'string',
          description: 'The previous block.'
        },
        balance: {
          type: 'string',
          description: 'The block balance id.'
        }
      }
    },
    previous: {
      type: 'string',
      format: 'uuid',
      example: '05321210-4546-400d-b70b-e059fef52fc4',
      description: 'The previous balance on the server. Consecutiveness is server only. Stale offline balances are not accommodated here.'
    }
  }
}
