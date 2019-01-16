const { oneOf } = require('../../../helpers/payload-or-null')

module.exports = {
  description: 'Daily totals by currency',
  additionalProperties: false,
  type: 'object',
  required: [
    'currency',
    'amount_cash_begin',
    'amount_cash_calculated',
    'amount_cash_counted',
    'amount_revenue_cash',
    'amount_revenue_total',
    'amount_tips_cash',
    'amount_tips_total',
    'amount_expenses',
    'amount_taxes'
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
    currency: {
      type: 'string',
      description: 'The three letter [ISO currency](https://en.wikipedia.org/wiki/ISO_4217) of this item.',
      example: 'EUR',
      minLength: 3,
      maxLength: 3
    },
    amount_cash_begin: {
      default: 0,
      description: 'The cash amount in the register at date_opening.',
      type: 'number',
      minimum: 0,
      maximum: 1000000,
      multipleOf: 0.01
    },
    amount_cash_calculated: {
      default: 0,
      description: 'The calculated cash amount in the register at date_closing.',
      type: 'number',
      minimum: 0,
      maximum: 1000000,
      multipleOf: 0.01
    },
    amount_cash_counted: {
      default: 0,
      description: 'The counted cash amount in the register at date_closing.',
      type: 'number',
      minimum: 0,
      maximum: 1000000,
      multipleOf: 0.01
    },
    amount_revenue_cash: {
      default: 0,
      description: 'The cash revenue.',
      type: 'number',
      minimum: -1000000,
      maximum: 1000000,
      multipleOf: 0.01
    },
    amount_revenue_total: {
      default: 0,
      description: 'The total revenue.',
      type: 'number',
      minimum: -1000000,
      maximum: 1000000,
      multipleOf: 0.01
    },
    amount_tips_cash: {
      default: 0,
      description: 'The amount of cash tips.',
      type: 'number',
      minimum: 0,
      maximum: 1000000,
      multipleOf: 0.01
    },
    amount_tips_total: {
      default: 0,
      description: 'The total amount of tips.',
      type: 'number',
      minimum: 0,
      maximum: 1000000,
      multipleOf: 0.01
    },
    amount_expenses: {
      default: 0,
      description: 'The total sum of expenses/deposits/bank transfers.',
      type: 'number',
      minimum: -1000000,
      maximum: 1000000,
      multipleOf: 0.01
    },
    amount_taxes: {
      default: 0,
      description: 'The total sum of taxes.',
      type: 'number',
      minimum: -1000000,
      maximum: 1000000,
      multipleOf: 0.01
    }
  }
}
