module.exports = {
  type: 'object',
  properties: {
    signing: {
      type: 'object',
      properties: {
        type: {
          type: 'string',
          enum: [
            'fiskaltrust',
            'tse_fiskaly',
            'tse_epson'
          ]
        },
        resource_type: {
          type: 'string',
          enum: [
            'branches',
            'registers'
          ]
        }
      }
    },
    history: {
      type: 'object',
      properties: {
        range: {
          description: 'Transactions created before (Now() - Range) are not guaranteed to be kept on the client (e.g. older ones will be deleted).',
          type: 'object',
          properties: {
            unit: {
              description: 'Unit of the range.',
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
            }
          }
        },
        max_count: {
          description: 'Maximum number of transactions that are kept on the client.',
          type: 'integer',
          minimum: 1,
          maximum: 75000,
          default: 20000
        }
      }
    }
  }
}
