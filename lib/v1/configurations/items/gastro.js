const { oneOf } = require('../../../helpers/payload-or-null')
module.exports = {
  type: 'object',
  properties: {
    takeaway: oneOf({
      type: 'object',
      additionalProperties: false,
      properties: {
        enabled: {
          type: 'boolean',
          description: 'Specifies if takeaway is available.',
          default: false
        },
        reuse_tax_options: {
          type: 'boolean',
          description: 'Legacy tax options can be used as a fallback before all products are synched',
          default: true
        }
      }
    }),
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
