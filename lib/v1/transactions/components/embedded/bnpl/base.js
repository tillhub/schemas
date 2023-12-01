// Íconst { oneOf } = require('../../../../../helpers/payload-or-null')

// https://unzer-pl.stoplight.io/docs/upl-purchase-api/b3A6MTY5NjAxNQ-query-for-a-purchase-by-purchase-id#Responses

module.exports = {
  description: 'BNPL details, scalable',
  additionalProperties: false,
  type: 'object',
  properties: {
    purchase: {
      description: 'Purchase details when Unzer BNPL is used',
      type: 'object',
      properties: {
        purchaseId: {
          type: 'string',
          description: 'Unzer BNPL purchase ID',
          example: 'CID-wh3m5f2co5weq4sjfdpq'
        }
      }
    },
    raw_response: {
      default: null,
      description: 'The full raw response of the BNPL API for documentation and analysis.',
      type: 'string',
      maxLength: 16384
    }
  }
}
