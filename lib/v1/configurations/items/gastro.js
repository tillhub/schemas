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
        })
      }
    })
  }
}
