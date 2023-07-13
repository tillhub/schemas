const { oneOf } = require('../../../helpers/payload-or-null')

module.exports = {
  ...oneOf({
    type: 'object',
    additionalProperties: true,
    properties: {
      staff_id_template: {
        description: 'A Tillhub string pattern that allows for parameterized staff number generation',
        oneOf: [
          {
            type: 'null'
          },
          {
            type: 'string',
            description: 'We need to have a SEQUENCE to assure the uniqueness of the id',
            minLength: 4,
            maxLength: 512,
            pattern: 'SEQUENCE'
          }
        ]
      },
      generate_staff_id: {
        description: 'The toggle to opt-in or -out of the staff number generation. Send this as query parameter on creation: ?generate_staff_number=true',
        type: 'boolean',
        default: 'false'
      },
      cashier_pin_cancel_enabled: {
        'description': 'If true, a cashier is allowed to cancel a PIN request. If false, the PIN request is not cancelable and will stay there',
        ...oneOf({
          'type': 'boolean',
          'default': false
        })
      },
      staff_per_branch: {
        'description': 'If true, staff will be synchronized per branch by sending it branch UUID as a request parameter',
        ...oneOf({
          'type': 'boolean',
          'default': false
        })
      },
      cashier_pin_logout_enabled: {
        'description': 'If true, a cashier is allowed to logout on a mandatory PIN request.',
        ...oneOf({
          'type': 'boolean',
          'default': false
        })
      },
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
      cashier_pin_policy: {
        'description': 'If required, the client shows a non-discardable login view (staff selection + login).',
        ...oneOf({
          type: 'string',
          'enum': [
            'required',
            'none',
            'after',
            'before'
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
      short_code_length: oneOf({
        type: 'object',
        additionalProperties: false,
        properties: {
        }
      }),
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
