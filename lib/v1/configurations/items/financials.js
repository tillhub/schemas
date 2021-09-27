const { oneOf } = require('../../../helpers/payload-or-null')
const currencyAmounts = require('../../../common/currency_amounts')

module.exports = {
  type: 'object',
  properties: {
    expense_note_required: {
      type: 'boolean',
      default: false
    },
    deposit_note_required: {
      type: 'boolean',
      default: false
    },
    bank_note_required: {
      type: 'boolean',
      default: false
    },
    safe_note_required: {
      type: 'boolean',
      default: false
    },
    expense_reason_required: {
      type: 'boolean',
      description: 'Defines whether selecting a predefined reason is required when booking an expense',
      default: false
    },
    deposit_reason_required: {
      type: 'boolean',
      description: 'Defines whether selecting a predefined reason is required when booking a deposit',
      default: false
    },
    price_change_note_required: {
      description: 'Defines if a note is mandatory on price changes on the register ',
      type: 'boolean',
      default: false
    },
    tips_expense_note_required: {
      type: 'boolean',
      default: false
    },
    sale_cancellation_note_required: {
      description: 'Defines if a note is mandatory for sale cancellation',
      type: 'boolean',
      default: false
    },
    safe_deposit_limit: {
      description: 'How much cash per currency can be taken from a safe, regardless of it\'s state',
      ...oneOf({
        ...currencyAmounts
      })
    },
    safe_expense_limit: {
      description: 'How much cash per currency can be put into a safe, regardless of it\'s state',
      ...oneOf({
        ...currencyAmounts
      })
    },
    keep_change_suggestion: {
      description: 'Will suggest balance expenses so that this amount is kept as change in the register, will not block overriding',
      ...oneOf({
        ...currencyAmounts
      })
    },
    low_cash_threshold: {
      description: 'Will pop a warning when register cash runs low',
      ...oneOf({
        ...currencyAmounts
      })
    },
    vat_base: oneOf({
      description: 'Specifies on which level the precise VAT calculation is performed (before rounding)',
      type: 'string',
      'enum': [
        'items',
        'cart'
      ],
      default: 'items'
    }),
    roundings: {
      ...oneOf({
        description: 'Defines the fractional rounding behavior of currencies (e.g. to 0.05 CHF)',
        type: 'array',
        items: {
          type: 'object',
          additionalProperties: false,
          properties: {
            currency: {
              type: 'string',
              description: 'The three letter [ISO currency](https://en.wikipedia.org/wiki/ISO_4217) of this item.',
              example: '',
              minLength: 3,
              maxLength: 3
            },
            enabled: {
              description: 'States if rounding information should be used for this currency',
              type: 'boolean',
              default: true
            },
            fraction: {
              ...oneOf({
                description: 'The smallest fraction to round to when source equals \'fixed\'.',
                type: 'number',
                minimum: 0.01,
                maximum: 10000,
                multipleOf: 0.01
              }),
              default: null
            },
            mode: {
              description: 'The desired rounding mode',
              type: 'string',
              'enum': [
                'up',
                'down',
                'bankers'
              ],
              default: 'bankers'
            },
            source: {
              description: 'The source for defining the fraction',
              type: 'string',
              'enum': [
                'cash_units', // lowest cash unit will be used instead of fraction
                'fraction' // fraction must be present and will be used
              ],
              default: 'cash_units'
            }
          }
        }
      })
    },
    fa_transit_account: oneOf({
      description: 'Used to be "settings_old.fa_transit_account"',
      type: 'string'
    }),
    datev: oneOf({
      type: 'object',
      required: [
        'advisor_number',
        'client_number',
        'business_year',
        'account_number_length'
      ],
      properties: {
        advisor_number: {
          type: 'string',
          maxLength: 5
        },
        client_number: {
          type: 'string',
          maxLength: 5
        },
        business_year: {
          description: `WJ-Beginn (business year): 8 digits (JJJJMMDD)`,
          type: 'string',
          minLength: 8,
          maxLength: 8
        },
        account_number_length: {
          type: 'integer',
          minimum: 1,
          maximum: 9
        }
      }
    })
  }
}
