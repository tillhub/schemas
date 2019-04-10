module.exports = {
  anyOf: [
    {
      type: 'object',
      additionalProperties: false,
      properties: {
        signing: {
          type: 'object',
          additionalProperties: false,
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
        expenses: {
          type: 'object',
          additionalProperties: false,
          properties: {
            drawer_open: {
              type: 'string',
              enum: [
                'entry',
                'booking'
              ]
            },
            'resource_type': {
              type: 'string',
              enum: [
                'branches'
              ]
            }
          }
        }
      }
    }
  ]
}
