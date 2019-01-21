const { oneOf } = require('../../../helpers/payload-or-null')

module.exports = {
  description: 'Taxes grouped by tax accounts (and currencies if neccessary)',
  type: 'object',
  additionalProperties: false,
  required: [
    'account',
    'currency',
    'amount'
  ],
  properties: {
    client_id: {
      ...oneOf({
        type: 'string',
        example: 'd0d40841-b1a7-438a-9d1e-2bfec590d2e3',
        minLength: 6,
        maxLength: 64,
        description: 'A implementer defined identifier. This can be used for local resource matching and has no business implication.'
      }),
      default: null
    },
    account: {
      default: null,
      ...oneOf({
        type: 'string',
        description: 'The applicable Tillhub account e.g for this payment type.',
        example: 'a5380b42-6025-49de-bb1d-c9357df96506'
      })
    },
    vat_rate: {
      type: 'number',
      description: 'The VAT rate of this group. E.g. 0.19 for 19% German VAT.',
      example: '0.19',
      minimum: 0,
      maximum: 1,
      multipleOf: 0.001
    },
    name: {
      default: null,
      ...oneOf({
        type: 'string',
        description: 'The nomenclature for this item, which is fiscally required.',
        example: 'Mehrwertsteuer ermäßigt.'
      })
    },
    currency: {
      type: 'string',
      description: 'The three letter [ISO currency](https://en.wikipedia.org/wiki/ISO_4217) of this item.',
      example: 'EUR',
      minLength: 3,
      maxLength: 3
    },
    amount: {
      example: '633.41',
      description: 'The calculated amount by summing all taxes of that type included in that balance.',
      type: 'number',
      minimum: -1000000,
      maximum: 1000000,
      multipleOf: 0.01
    },
    custom_id: {
      default: null,
      ...oneOf({
        type: 'string',
        description: 'Any custom ID.',
        example: '1234566'
      })
    },
    context: {
      ...oneOf({
        type: 'object',
        description: 'Any additional flat values.',
        properties: {
          account: {
            ...oneOf({
              type: 'object',
              description: 'Account face values.',
              properties: {
                number: {
                  description: 'Account number.', // account or expense_account fa_account_number
                  type: 'string',
                  example: '1776'
                },
                display: {
                  description: 'Account description.', // account or expense_account name
                  type: 'string',
                  example: 'Warenerlöse 7 %' // or 'sonstige Reparaturen/und Instandhaltungen'
                }
              }
            }),
            default: null
          }
        },
        required: [
          'account',
          'product'
        ]
      }),
      default: null
    },
    metadata: {
      ...oneOf({
        type: 'object',
        description: 'A container for storing arbitrary metadata. This might be altered by API.'
      }),
      default: null
    }
  }
}
