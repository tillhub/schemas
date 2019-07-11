const { oneOf } = require('../../helpers/payload-or-null')

module.exports.request = {
  $id: 'https://schemas.tillhub.com/v0/loyalty_values.book.request.query.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  description: 'Information on the source and the destination of the booking. For example a booking can take place from collected "points" on a loyalty card to "EUR" in a voucher. For the calcuation of e.g. "points" into "EUR", and any other booking, it is assumed that "exchange_rates" were defined in the "loyalty_system.',
  type: 'object',
  required: [
    'from',
    'to'
  ],
  properties: {
    from: {
      type: 'object',
      description: 'This property holds all necessary information of the source of this transfer, i.e. the card number and the amount + unit',
      additionalProperties: false,
      properties: {
        card: {
          type: 'string',
          description: 'alphanumeric uuid of the loyalty card where the values should be booked from',
          format: 'uuid'
        },
        unit: {
          type: 'string',
          description: 'The unit where the values should be decreased, e.g. "points"',
          examples: [
            'EUR',
            'USD',
            'points',
            'miles'
          ]
        },
        amount: oneOf({
          type: 'number',
          multipleOf: 0.01,
          minimum: 0
        })
      }
    },
    to: {
      type: 'object',
      description: 'This property holds all necessary information of the destination of this transfer, i.e. the type of entity and the goal unit',
      additionalProperties: false,
      properties: {
        type: {
          type: 'string',
          description: 'The entity where the values should be transferred to, i.e. a voucher',
          enum: [
            'voucher'
          ]
        },
        unit: {
          type: 'string',
          description: 'The goal unit that this booking should translate into. For example a booking can take place from collected "points" on a card to "EUR" in a voucher.',
          examples: [
            'EUR',
            'USD',
            'points',
            'miles'
          ]
        },
        amount: oneOf({
          type: 'number',
          multipleOf: 0.01,
          minimum: 0
        })
      }
    }
  }
}

// module.exports.response = {
//   $id: 'https://schemas.tillhub.com/v0/loyalty_values.book.response.schema.json',
//   $schema: 'http://json-schema.org/draft-07/schema#',
//   additionalProperties: false,
//   type: 'object',
//   required: [
//     'operation',
//     'account'
//   ],
//   properties: {
//     operation: {
//       type: 'string',
//       enum: [
//         'book_to_voucher'
//       ]
//     },
//     account: {
//       type: 'string',
//       description: 'The alphanumeric uuid of the loyalty account where the values should be booked from.',
//       format: 'uuid'
//     }
//   }
// }
