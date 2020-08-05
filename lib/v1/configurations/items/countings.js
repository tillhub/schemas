module.exports = {
  manual_trigger: {
    type: 'boolean',
    description: 'defines whether manual trigger for cashing ups is possible or not',
    default: 'false'
  },
  cashier_change: {
    type: 'boolean',
    description: 'defines whether a counting is mandatory to switch cashier',
    default: 'false'
  },
  receipt_counting: {
    type: 'boolean',
    description: 'defines whether a receipt is printed on cashing ups or not',
    default: 'false'
  },
  automatic_countout: {
    oneOf: [
      {
        type: 'null'
      },
      {
        type: 'object',
        additionalProperties: false,
        properties: {
          enabled: {
            type: 'boolean',
            description: 'Defines if automatically triggered countout is enabled or not',
            default: 'false'
          },
          transactions: {
            type: 'integer',
            description: 'If automatic countout is enabled, defines the numer of transactions that will trigger a new count out',
            default: 50
          },
          hours: {
            type: 'integer',
            description: 'If automatic countout is enabled, defines the hourly interval that will trigger a new count out',
            default: 2
          }
        }
      }
    ]
  }
}
