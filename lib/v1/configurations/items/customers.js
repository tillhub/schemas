const { oneOf } = require('../../../helpers/payload-or-null')

module.exports = oneOf({
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
    search: oneOf({
      description: 'Settings specific to search',
      type: 'object',
      properties: {
        api: oneOf({
          description: 'Settings specific to search API',
          type: 'object',
          properties: {
            version: oneOf({
              description: 'API version to use for customers search', // this should in particular be deprecated as sson as no issues are there to be fixed anymore
              type: 'string',
              enum: [
                'v0',
                'v1'
              ],
              default: 'v1'
            })
          }
        })
      }
    })
  }
})
