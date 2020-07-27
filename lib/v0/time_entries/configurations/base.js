module.exports = {
  client_id: {
    description: 'A identifier used locally on POS for their own reference.',
    anyOf: [
      {
        type: 'string',
        maxLength: 128
      },
      {
        type: 'null'
      }
    ]
  },
  active: {
    description: 'Soft disable or enabled this time entry.',
    type: 'boolean',
    default: true
  },
  deleted: {
    description: 'Soft delete this time entry.',
    type: 'boolean',
    default: false
  },
  auto_clock_out: {
    description: 'Feature enabled/disabled.',
    type: 'boolean',
    default: false
  },
  auto_clock_out_after: {
    description: 'Time configuration for clock out after a period of time.',
    anyOf: [
      {
        type: 'object',
        properties: {
          value: {
            type: 'integer',
            description: 'The amount of time.',
            default: 12
          },
          period: {
            type: 'string',
            description: 'The type of time.',
            default: 'hours',
            enum: [
              'hours',
              'days'
            ]
          }
        }
      },
      {
        type: 'null'
      }
    ]
  },
  auto_clock_out_at_midnight: {
    description: 'Automatically clock out at midnight.',
    type: 'boolean',
    default: false
  }
}
