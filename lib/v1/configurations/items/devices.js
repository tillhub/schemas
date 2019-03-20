module.exports = {
  anyOf: [
    {
      type: 'null'
    },
    {
      type: 'object',
      additionalProperties: false,
      properties: {
        terminal_apis: {
          type: 'object',
          properties: {
            adyen: {
              type: 'object',
              properties: {
                enabled: {
                  type: 'boolean',
                  default: false
                }
              }
            },
            concardis: {
              type: 'object',
              properties: {
                enabled: {
                  type: 'boolean',
                  default: false
                }
              }
            },
            opi: {
              type: 'object',
              properties: {
                enabled: {
                  type: 'boolean',
                  default: false
                }
              }
            },
            sumup: {
              type: 'object',
              properties: {
                enabled: {
                  type: 'boolean',
                  default: false
                }
              }
            },
            tim: {
              type: 'object',
              properties: {
                enabled: {
                  type: 'boolean',
                  default: false
                }
              }
            }
          }
        }
      }
    }
  ]
}
