module.exports = {
  oneOf: [
    {
      type: 'null'
    },
    {
      type: 'object',
      additionalProperties: false,
      properties: {
        stages: {
          type: 'object',
          additionalProperties: false,
          properties: {
            account_information: {
              type: 'boolean',
              default: false
            },
            branches: {
              type: 'boolean',
              default: false
            },
            register: {
              type: 'boolean',
              default: false
            },
            staff: {
              type: 'boolean',
              default: false
            }
          }
        },
        completed: {
          type: 'boolean',
          default: false
        }
      }
    }
  ]
}
