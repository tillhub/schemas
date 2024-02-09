const { oneOf } = require('../../../helpers/payload-or-null')

module.exports = {
  oneOf: [
    {
      type: 'null'
    },
    {
      type: 'object',
      properties: {
        customer_number_template: {
          description: 'A Tillhub string pattern that allows for parameterized customer number generation',
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
        generate_customer_number: {
          description: 'The toggle to opt-in or -out of the customer number generation. Send this as query parameter on creation: ?generate_customer_number=true',
          type: 'boolean',
          default: 'false'
        },
        customer_number_type: {
          type: 'string',
          enum: [
            'franchise'
          ]
        },
        auto_customer_number_enabled: {
          type: 'string',
          enum: [
            'true',
            'false',
            'optional'
          ],
          default: 'false'
        },
        customers_per_branch: {
          type: 'boolean',
          default: false
        },
        default_branch: {
          oneOf: [
            {
              type: 'string',
              format: 'uuid'
            },
            {
              type: 'null'
            }
          ]

        },
        custom_export: {
          type: 'boolean',
          default: false
        },
        barcode_capture: oneOf({
          type: 'object',
          description: 'Defines optional customer number extraction from a scanned barcode',
          additionalProperties: false,
          properties: {
            enabled: {
              description: 'Defines if customer number capturing should be tried',
              type: 'boolean'
            },
            pattern: {
              description: 'Defines how a customer number can be extracted from a scanned barcode',
              type: 'string',
              format: 'regex', // should not have more than 1 capturing group
              examples: [
                '^.{2}.{8}.({4,6})$', // extracts last 4 to 6 characters from a string of length 14 to 16
                '^[0-9]{14}$' // matches exactly 14 digits
              ]
            }
          },
          required: [
            'enabled',
            'pattern'
          ],
          default: null
        }),
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
        }
      }
    }
  ]
}
