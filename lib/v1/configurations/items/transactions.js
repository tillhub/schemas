module.exports = {
  type: 'object',
  properties: {
    signing: {
      type: 'object',
      properties: {
        type: {
          type: 'string',
          enum: [
            'fiskaltrust'
          ]
        },
        resource_type: {
          type: 'string',
          enum: [
            'branches'
          ]
        }
      }
    },
    history_range: {
      unit: {
        type: 'string',
        enum: [
          'hours',
          'days',
          'weeks',
          'months',
          'years'
        ],
        default: 'months'
      },
      value: {
        description: 'The value of the range, defines a timeframe together with the set unit.',
        type: 'integer',
        minimum: 1,
        maximum: 500,
        default: 2
      },
      max_count: {
        type: 'integer',
        minimum: 1,
        maximum: 75000,
        default: 20000
      }
    }
  }
}
