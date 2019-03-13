const { oneOf } = require('../../../helpers/payload-or-null')

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
    keep_change_suggestion: {
      description: 'Will suggest balance expenses so that this amount is kept as change in the register, will not block overriding',
      type: 'number',
      minimum: 0,
      maximum: 1000000,
      multipleOf: 0.01
    },
    low_cash_threshold: {
      description: 'Will pop a warning when register cash runs low',
      type: 'number',
      minimum: 0,
      maximum: 1000000,
      multipleOf: 0.01
    },
    roundings: {
      ...oneOf({
        description: 'Defines the receipt-types the accumulated discount will be printed on (e.g. customer, merchant)',
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
                description: 'The smallest fraction of currency amounts to round to when source equals \'fixed\'.',
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
              ]
            },
            source: {
              description: 'The source for defining the fraction',
              type: 'string',
              'enum': [
                'cash_unit', // lowest cash unit will be used instead of fraction
                'fixed' // fraction must be present and will be used
              ]
            }
          }
        }
      })
    }
  }
}
