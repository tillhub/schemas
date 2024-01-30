const { oneOf } = require('../../../helpers/payload-or-null')

module.exports = oneOf({
  type: 'object',
  properties: {
    enabled: oneOf({
      description: 'global on-off-switch for the vouchers-feature',
      type: 'boolean',
      default: false
    }),
    allow_cart_redemption: oneOf({
      description: 'Specifies if vouchers can be redeemed as cart items with negative quantity.',
      type: 'boolean',
      default: true
    })
  }
})
