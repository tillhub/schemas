const base = require('../safes_log_book/base')

module.exports.request = {
  $id: 'https://schemas.tillhub.com/v0/safes.book.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  type: 'object',
  required: [
    'initiated_at',
    'issuer',
    'from',
    'to',
    'items'
  ],
  properties: {
    ...base,
    transfer_type: {
      type: 'string',
      enum: [
        'safe_to_safe',
        'safe_to_bank'
      ]
    },
    items: {
      type: 'array',
      description: 'Array of bookings with an element for each currency to allow multi-currency',
      minItems: 1,
      items: {
        type: 'object',
        additionalProperties: false,
        properties: {
          amount: {
            type: 'number',
            description: 'Amount that is being transferred from origin to destination',
            multipleOf: 0.01,
            minimum: 0
          },
          currency: {
            type: 'string',
            description: 'The three letter [ISO currency](https://en.wikipedia.org/wiki/ISO_4217) of this item.',
            example: 'EUR',
            minLength: 3,
            maxLength: 3
          }
        }
      }
    }
  }
}
