module.exports = {
  type: 'object',
  additionalProperties: false,
  properties: {
    enabled: {
      type: 'boolean',
      default: true
    },
    externals: {
      type: 'object',
      additionalProperties: false,
      properties: {
        enabled: {
          type: 'boolean',
          default: false
        },
        systems: {
          type: 'array',
          items: {
            type: 'object',
            additionalProperties: false,
            properties: {
              type: {
                type: 'string',
                enum: [
                  'tillhub-analytics-api'
                ]
              },
              enabled: {
                type: 'boolean',
                default: true
              },
              id: {
                type: 'string',
                minLength: 5,
                maxLength: 64
              }
            }
          }
        }
      }
    }
  }
}
