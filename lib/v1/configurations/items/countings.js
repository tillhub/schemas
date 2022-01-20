module.exports = {
  manual_trigger: {
    type: 'boolean',
    description: 'defines whether manual trigger for cashing ups is possible or not',
    default: 'false'
  },
  on_cashier_change: {
    type: 'boolean',
    description: 'defines whether a counting is mandatory to switch cashier',
    default: 'false'
  },
  receipt_counting: {
    type: 'boolean',
    description: 'defines whether a receipt is printed on cashing ups or not',
    default: 'false'
  },
  discrepancy: {
    oneOf: [
      {
        type: 'null'
      },
      {},
      {
        type: 'object',
        additionalProperties: false,
        properties: {
          warning: {
            type: 'boolean',
            description: 'defines whether warning is displayed in case of discrepancy',
            default: 'true'
          },
          recount_permission: {
            type: 'boolean',
            description: 'defines whether recounting is allowed',
            default: 'true'
          }
        }
      }
    ]
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
          minutes: {
            type: 'integer',
            description: 'If automatic countout is enabled, defines the minutes interval that will trigger a new count out',
            default: 120
          }
        }
      }
    ]
  }
}
