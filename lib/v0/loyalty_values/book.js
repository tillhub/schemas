const { oneOf } = require('../../helpers/payload-or-null')

module.exports.request = {
  $id: 'https://schemas.tillhub.com/v0/loyalty_values.book.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  description: 'Information on the source and the destination of the booking. For example a booking can take place from collected "points" on a loyalty card to "EUR" in a voucher. For the calcuation of e.g. "points" into "EUR", and any other booking, it is assumed that "exchange_rates" were defined in the "loyalty_system.',
  type: 'object',
  required: [
    'from',
    'loyalty_card',
    'amount'
  ],
  properties: {
    loyalty_card: {
      type: 'string',
      description: 'The alphannumeric uuid of the loyalty card, where the values should be booked from',
      format: 'uuid'
    },
    from: {
      type: 'string',
      description: 'Name of the unit which you are converting the amount from. This can be a 3 letter ISO currency code or any other string that corresponds to a unit from loyalty_systems.value_configurations.',
      examples: [
        'EUR',
        'USD',
        'points',
        'miles'
      ]
    },
    to: oneOf({
      type: 'string',
      description: 'Name of the unit of the destination value. This can be a 3 letter ISO currency code or any other string that corresponds to a unit from loyalty_systems.value_configurations. If the destination is "voucher" then this should be a ISO currency code. If conversion_type is not defined in this body, the default behavior is to write the same "from" unit into the voucher - thus, "to" should not be specified or it needs to be equal to "from".',
      examples: [
        'EUR',
        'USD',
        'points',
        'miles'
      ]
    }),
    amount: {
      type: 'number',
      description: 'The amount that should be decreased on the loyalty card and booked to the destination entity, e.g. voucher.',
      multipleOf: 0.01,
      minimum: 0
    },
    conversion_type: oneOf({
      type: 'string',
      description: 'The rules by which the destination amount should be calculated. The option "custom" will trigger the relevant hook from loyalty_systems.hooks. Another options, which is not available yet but will be added in the future is "exchange_rate". This will trigger a lookup in voucher_systems.exchange_rates to determine the voucher value.',
      enum: [
        // 'exchange_rate',
        'custom'
      ]
    }),
    destination_type: oneOf({
      type: 'string',
      description: 'The entity where the values should be transferred to. At this moment, the only option is "voucher", but can potentially be extended in the future.',
      enum: [
        'voucher'
      ]
    }),
    voucher_config: oneOf({
      type: 'object',
      description: 'This property is required when the desintation_type is "voucher". It needs to specify format and format_type.',
      additionalProperties: false,
      required: [
        'format',
        'format_type'
      ],
      properties: {
        format: {
          description: 'The format this voucher conforms to',
          example: 'xxxx xxxx xxxx',
          type: 'string'
        },
        format_type: {
          description: '',
          type: 'string',
          'enum': [
            'numeric',
            'alphanumeric',
            'alphabetic'
          ]
        }
      }
    })
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
