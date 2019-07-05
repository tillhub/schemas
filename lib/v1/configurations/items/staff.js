const { oneOf } = require('../../../helpers/payload-or-null')

module.exports = {
  ...oneOf({
    type: 'object',
    additionalProperties: true,
    properties: {
      salesman_pin_policy: {
        'description': 'The salesperson selection screen will be presented automatically before or after a sale (or not in case of none).',
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
        'description': 'The customer selection screen will be presented automatically before or after a sale (or not in case of none).',
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
        'description': 'If required, the client shows a non-discardable login view (staff selection + login).',
        ...oneOf({
          type: 'string',
          'enum': [
            'required',
            'none'
          ]
        })
      },
      show_staff_number: {
        'description': 'If true, staff number will be shown below the name in the staff selection view.',
        ...oneOf({
          'type': 'boolean',
          'default': true
        })
      },
      promote_permissions: {
        'description': 'If true, the client performs a migration from legacy permissions once.',
        ...oneOf({
          'type': 'boolean',
          'default': false
        })
      },
      staff_number_length: {
        // deprecated
        'description': 'If the API defines a specific length for a staff number it can be reported here.',
        ...oneOf({
          'type': 'integer',
          'minimum': 2,
          'maximum': 32
        })
      }
    }
  })
}
