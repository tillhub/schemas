const base = require('../safes_log_book/base')

module.exports.request = {
  $id: 'https://schemas.tillhub.com/v0/safes.book.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  type: 'object',
  properties: {
    ...base,
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
            multipleOf: 0.01
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
  },
  if: {
    properties: {
      transfer_type: {
        type: 'string',
        enum: [
          'pos_to_safe'
        ]
      }
    }
  },
  then: {
    required: [
      'initiated_at',
      'issuer',
      'to',
      'items',
      'transfer_type'
    ],
    properties: {
      to: {
        type: 'string',
        description: 'Alphanumeric ID of origin, e.g. safe uuid',
        format: 'uuid'
      }
    }
  },
  else: {
    required: [
      'initiated_at',
      'issuer',
      'from',
      'to',
      'items',
      'transfer_type'
    ],
    properties: {
      from: {
        type: 'string',
        description: 'Alphanumeric ID of origin, e.g. safe uuid',
        format: 'uuid'
      },
      to: {
        type: 'string',
        description: 'Alphanumeric ID of destination, e.g. safe or bank uuid',
        format: 'uuid'
      }
    }
  }
}
