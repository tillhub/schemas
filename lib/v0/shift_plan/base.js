module.exports = {
  shifts: {
    type: 'array',
    items: {
      type: 'object',
      additionalProperties: false,
      properties: {
        branch_id: {
          type: 'string',
          format: 'uuid'
        },
        shift_plan: {
          type: 'array',
          items: {
            type: 'object',
            additionalProperties: false,
            properties: {
              staff_member_id: {
                type: 'string',
                format: 'uuid'
              },
              date: {
                type: 'string',
                format: 'date'
              },
              plan: {
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
  },
  deleted: {
    type: 'array',
    items: {
      type: 'string',
      format: 'uuid'
    }
  }
}
