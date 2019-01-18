const { oneOf } = require('../../../helpers/payload-or-null')

module.exports = {
  description: 'Payments grouped by payment options (and currencies if neccessary - and, if indicated by e.g. card cisrcuits).',
  additionalProperties: false,
  type: 'object',
  required: [
    'payment_option',
    'type',
    'name',
    'currency',
    'amount_calculated',
    'amount_tip',
    'amount_change',
    'amount_counted',
    'amount_discrepancy'
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
    payment_option: {
      default: null,
      ...oneOf({
        type: 'string',
        format: 'uuid',
        description: 'The Tillhub payment option resource reference ID.',
        example: 'bd7d8a90-83d1-4d53-8659-b205b409d6e1'
      })
    },
    account: {
      default: null,
      ...oneOf({
        type: 'string',
        description: 'The applicable Tillhub account e.g for this payment type.', // cash account if type == expense
        example: 'a5380b42-6025-49de-bb1d-c9357df96506'
      })
    },
    account_change: {
      default: null,
      ...oneOf({
        type: 'string',
        description: 'The applicable Tillhub account for the cash payment type used for change.',
        example: 'a5380b42-6025-49de-bb1d-c9357df96506'
      })
    },
    cost_center: {
      default: null,
      ...oneOf({
        type: 'string',
        description: 'Any external reference to a cost center e.g. in enterprise environments.',
        example: 'CORP-123'
      })
    },
    name: {
      type: 'string',
      description: 'The nomenclature for this item, which is fiscally required.',
      example: 'Kartenzahlung Online'
    },
    currency: {
      type: 'string',
      description: 'The three letter [ISO currency](https://en.wikipedia.org/wiki/ISO_4217) of this item.',
      example: 'EUR',
      minLength: 3,
      maxLength: 3
    },
    type: {
      type: 'string',
      description: 'The payment option used as key',
      enum: [
        'card',
        'cash',
        'expense', // there will be no seperate balance_expense anymore
        'voucher',
        'custom', // paypal etc.
        'invoice',
        // legacy
        'card_opi',
        'card_concardis',
        'card_adyen',
        'card_tim'
      ]
    },
    grouped_by: {
      default: null,
      ...oneOf({
        type: 'object',
        additionalProperties: false,
        description: 'Beyond payment option - payment options are further grouped by e.g. certain card circuits.',
        properties: {
          type: {
            type: 'string',
            description: 'The payment field used as a secondary grouping key',
            enum: [
              'card_circuits', // the group is specified by the named card circuits in values
              'custom' // TBD the group is specified by the named others in values
            ]
          },
          values: {
            type: 'array',
            items: {
              type: 'string',
              additionalProperties: false,
              description: 'A card circuit that is part of this grouping.', // or some other respectively
              example: 'Masrer Card' // or 'Other 2' respectively
            }
          }
        }
      })
    },
    amount_calculated: {
      example: '27633.02',
      description: 'The calculated amount by summing all payments of that type included in that balance.',
      type: 'number',
      minimum: -1000000,
      maximum: 1000000,
      multipleOf: 0.01
    },
    amount_tip: {
      example: '921.45',
      description: 'The (in amount_calculated) included tip amount.',
      type: 'number',
      minimum: -1000000,
      maximum: 1000000,
      multipleOf: 0.01,
      default: null
    },
    amount_counted: {
      example: '27628.11',
      description: 'The reported amount (by counting cash or accessing an external reference, e.g. terminal balance report).', // currently deactivated for card payments
      type: 'number',
      minimum: -1000000,
      maximum: 1000000,
      multipleOf: 0.01,
      default: null
    },
    amount_discrepancy: {
      description: 'The discrepancy between amount_calculated and amount_counted.',
      example: '-4.91',
      type: 'number',
      minimum: -1000000,
      maximum: 1000000,
      multipleOf: 0.01,
      default: null
    },
    amount_change: {
      description: 'The cash amount that was handed back from the cashier as change for all payments included.',
      example: '49.98',
      type: 'number',
      minimum: 0,
      maximum: 1000000,
      multipleOf: 0.01,
      default: null
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
                  example: 'Konto Kartenzahlungen' // or 'sonstige Reparaturen/und Instandhaltungen'
                }
              }
            }),
            default: null
          },
          account_change: {
            ...oneOf({
              type: 'object',
              description: 'Change account face values.',
              properties: {
                number: {
                  description: 'Account number.', // account or expense_account fa_account_number
                  type: 'string',
                  example: '1002'
                },
                display: {
                  description: 'Account description.', // account or expense_account name
                  type: 'string',
                  example: 'Wechselgeld' // or 'sonstige Reparaturen/und Instandhaltungen'
                }
              }
            }),
            default: null
          }
        },
        required: [
          'account'
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
