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
              minLength: 4,
              maxLength: 512
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
          type: 'boolean',
          default: false
        }
      }
    }
  ]
}
