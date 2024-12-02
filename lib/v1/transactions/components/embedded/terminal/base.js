const { stripIndents } = require('common-tags')

module.exports = {
  type: 'object',
  description: 'The effective voucher delta record for this item (thus reversable if needed)',
  additionalProperties: false,
  required: [
    'device_id',
    'transaction_id',
    'api',
    'card_circuit',
    'card_pan',
    'raw_response'
  ],
  properties: {
    device_id: {
      type: 'string',
      example: '51098708',
      minLength: 4,
      maxLength: 64,
      description: 'The Id of the terminal used. Style differs by Terminal-API-type.'
    },
    transaction_id: {
      type: 'string',
      example: 'd0d40841-b1a7-438a-9d1e-2bfec590d2e3',
      minLength: 4,
      maxLength: 64,
      description: 'The Id assigned by the terminal for this transaction.'
    },
    api: {
      type: 'string',
      description: 'The API used to talk to the terminal.',
      enum: [
        'adyen',
        'concardis',
        'opi',
        'tim',
        'sumup',
        'spos',
        'ZVT' // sic! for historical reasons!
      ]
    },
    payment_provider: {
      default: null,
      type: 'string',
      minLength: 1, //
      maxLength: 128,
      description: 'The payment provider (e.g. Elavon)'
    },
    card_circuit: {
      default: null,
      type: 'string',
      minLength: 1, // we have seen Master Card reported as just "mc"
      maxLength: 128,
      description: 'The detected card circuit as reposrted by the terminal (VISA, MasterCard, GiroCard etc.)'
    },
    card_pay_id: {
      default: null,
      type: 'string',
      minLength: 3,
      maxLength: 128,
      description: 'Payment Provider Transaction ID (coming from the CCV / Computop terminal) for successful OPI Terminal Card Payments'
    },
    card_pan: {
      default: null,
      type: 'string',
      minLength: 3,
      maxLength: 128,
      description: 'The cards primary account number. *** on merchant receipts.'
    },
    receipts: {
      description: 'The receipt texts reported by the terminal.',
      type: 'array',
      default: null,
      items: {
        type: 'object',
        additionalProperties: false,
        required: [
          'type',
          'text'
        ],
        properties: {
          type: {
            type: 'string',
            enum: [
              'customer',
              'merchant'
            ]
          },
          text: {
            type: 'string',
            maxLength: 16384
          }
        }
      }
    },
    raw_response: {
      default: null,
      description: 'The raw response of the terminal for finalizing the card payment. Might contain additional information.',
      type: 'string',
      maxLength: 16384
    },
    is_connected: {
      default: null,
      description: stripIndents`
      If true - the terminal was connected during the payment process and data must have arrived in the POS.
      If true - a cancellation must be connected to the termianla as well.
      If false - the terminal was used independently - responsibility is with the cashier to handle data properly.
      If false - a cancellation will not connect to a device.
      `,
      type: 'boolean'
    }
  }
}
