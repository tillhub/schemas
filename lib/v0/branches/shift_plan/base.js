module.exports = {
  shift_plan_enabled: {
    type: 'boolean'
  },
  plan: {
    type: 'array',
    items: {
      type: 'object',
      additionalProperties: false,
      properties: {
        user: {
          type: 'string',
          format: 'uuid'
        },
        time_ranges: {
          type: 'array',
          items: {
            type: 'object',
            additionalProperties: false,
            properties: {
              date: {
                type: 'string',
                format: 'date'
              },
              times: {
                type: 'array',
                items: {
                  type: 'object',
                  additionalProperties: false,
                  properties: {
                    start: {
                      type: 'string'
                    },
                    end: {
                      type: 'string'
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
