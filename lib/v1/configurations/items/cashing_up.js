module.exports = {
  type: 'object',
  additionalProperties: false,
  properties: {
    receipt_printing: {
      description: 'describes receipt behavior of a cashing up process',
      type: 'object',
      additionalProperties: false,
      properties: {
        enabled: {
          type: 'boolean',
          description: 'enables receipt printing',
          default: 'true'
        } // ,
        // additional information, tbd. - receipt options will be taken from \'receipts.configurable_receipt.cashing_up\'
      }
    },
    triggers: {
      type: 'object',
      description: 'describes how a cashing up process can be initiated',
      additionalProperties: false,
      properties: {
        manual: {
          type: 'object',
          additionalProperties: false,
          properties: {
            enabled: {
              type: 'boolean',
              description: 'defines whether manual trigger for cashing ups is possible or not',
              default: 'false'
            } // ,
            // additional information, e.g. from where manual triggering is possible
          }
        },
        automatic: {
          type: 'object',
          additionalProperties: false,
          properties: {
            enabled: {
              type: 'boolean',
              description: 'defines whether automatic trigger for cashing ups is possible or not',
              default: 'false'
            } // ,
            // additional information, e.g. time configurations, priorities etc.
          }
        }
      }
    }
  }
}
