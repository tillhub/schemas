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
    all: validationType, // default for all objects that are not covered below yet
    accounts: validationType, // financial accounts
    carts: validationType, // saved carts and active cart
    transactions: validationType, // sales, expenses etc.
    balances: validationType, // balances
    items: validationType, // items within all containers
    products: validationType, // products and product images
    product_groups: validationType, // product groups
    taxes: validationType, // taxes master data
    vouchers: validationType, // vouchers in transactions, items or payments
    payments: validationType, // payments in transactions
    discounts: validationType, // master data discounts and discounts in transactions
    customers: validationType // master data customers
  },
  additionalProperties: validationType
})
