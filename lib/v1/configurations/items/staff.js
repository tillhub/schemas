const { oneOf } = require('../../../helpers/payload-or-null')

module.exports = {
  ...oneOf({
    type: 'object',
    additionalProperties: true,
    properties: {
      salesman_pin_policy: {
        ...oneOf({
          type: 'string',
          'enum': [
            'after',
            'before',
            'none'
          ]
        })
      },
      customer_add_policy: {
        ...oneOf({
          type: 'string',
          'enum': [
            'after',
            'before',
            'none'
          ]
        })
      },
      cashier_pin_policy: {
        ...oneOf({
          type: 'string',
          'enum': [
            'required',
            'none'
          ]
        })
      }
    }
  })
}
