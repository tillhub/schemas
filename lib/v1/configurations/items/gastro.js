const { oneOf } = require('../../../helpers/payload-or-null')
module.exports = {
  type: 'object',
  properties: {
    lock_orders_to_waiters: oneOf({
      type: 'boolean',
      description: 'defines whether orders are locked to the waiters',
      default: 'false'
    })
  }
}
