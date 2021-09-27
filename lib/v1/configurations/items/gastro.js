const { oneOf } = require('../../../helpers/payload-or-null')
module.exports = {
  type: 'object',
  properties: {
    orders: oneOf({
      type: 'object',
      properties: {
        lock_to_waiters: oneOf({
          type: 'boolean',
          description: 'defines whether orders are locked to the waiters',
          default: 'false'
        }),
        reassignment: oneOf({
          type: 'object',
          properties: {
            requires_pin: oneOf({
              type: 'boolean',
              description: 'defines whether the pin from the next waiter will be required in the reassignment.',
              default: 'false'
            })
          }
        }),
        balance: oneOf({
          type: 'object',
          properties: {
            open_orders_policy: oneOf({
              type: 'string',
              description: 'Defines behavior if there are open orders when conducting a balance.',
              enum: [
                'ignore', // Don't block
                'warning', // Warning (and let the user decide if he still wants to go through)
                'block' // Do not allow conducting a balance
              ],
              default: 'ignore'
            })
          }
        })
      }
    })
  }
}
