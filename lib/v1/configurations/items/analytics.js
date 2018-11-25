module.exports = {
  type: 'object',
  additionalProperties: false,
  properties: {
    enabled: {
      type: 'boolean',
      default: true
    },
    externals: {
      description: 'This defines whether a client account should be able to consume external analytics data, e.g. of other Tillhub client accounts.',
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
              },
              name: {
                oneOf: [
                  {
                    type: 'string',
                    minLength: 1,
                    maxLength: 64
                  },
                  {
                    type: 'null'
                  }
                ]
              }
            }
          }
        }
      }
    },
    external_targets: {
      description: 'This defines to which external systems analytics data should be made available, e.g. other Tillhub client accounts. Those external systems need to be authorised additionally via a user, with sufficient scopes. In the Tillhub client account to Tillhub client account scenerio the target account must have a matching \'external\' entry as it is defined above.',
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
