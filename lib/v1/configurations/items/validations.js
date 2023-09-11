const { oneOf } = require('../../../helpers/payload-or-null')

const validationType = oneOf({
  type: 'string',
  enum: [
    'hard',
    'soft',
    'off'
  ]
})

module.exports = oneOf({
  type: 'object',
  description: 'A dictionary <string, string> describing all validation values',
  properties: {
    all: validationType,
    accounts: validationType,
    carts: validationType,
    transactions: validationType,
    balances: validationType,
    items: validationType,
    products: validationType,
    productGroups: validationType,
    taxes: validationType,
    vouchers: validationType,
    payments: validationType,
    discounts: validationType,
    customers: validationType
  },
  additionalProperties: validationType
})
