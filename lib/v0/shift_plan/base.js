module.exports = {
  shift_plan_enabled: {
    type: 'boolean'
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
