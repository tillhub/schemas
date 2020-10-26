const { oneOf } = require('../../../helpers/payload-or-null')

module.exports = {
  description: 'Payments grouped by payment options (and currencies if neccessary - and, if indicated by e.g. card cisrcuits).',
  additionalProperties: false,
  type: 'object',
  required: [
    'currency_iso_code',
    'units'
  ],
  properties: {
    currency_iso_code: {
      type: 'string',
      description: 'The three letter [ISO currency](https://en.wikipedia.org/wiki/ISO_4217) of this item.',
      example: 'EUR',
      minLength: 3,
      maxLength: 3
    },
    units: {
      type: 'array',
      additionalProperties: false,
      description: 'units.',
      items: {
        type: 'object',
        description: 'Cash unit details pre e.g. 7 pieces of 10 Cents coins.',
        required: [
          'type',
          'count',
          'value'
        ],
        properties: {
          type: {
            type: 'string',
            example: 'coin',
            enum: [
              'bill',
              'coin'
            ]
          },
          count: {
            default: 0,
            type: 'integer',
            description: 'The count of this coin or bill.',
            example: 7,
            minimum: 0,
            maximum: 10000,
            multipleOf: 1
          },
          value: {
            example: '200',
            description: 'The value of this coin or bill, e.g. 200 == a 2€ coin.',
            type: 'integer',
            minimum: 0,
            maximum: 10000000
          },
          client_id: {
            ...oneOf({
              type: 'string',
              example: 'd0d40841-b1a7-438a-9d1e-2bfec590d2e3',
              minLength: 6,
              maxLength: 64,
              description: 'A implementer defined identifier. This can be used for local resource matching and has no business implication.'
            }),
            default: null
          },
          currency_iso_code: {
            ...oneOf({
              type: 'string',
              description: 'The three letter [ISO currency](https://en.wikipedia.org/wiki/ISO_4217) of this item.',
              example: 'EUR',
              minLength: 3,
              maxLength: 3
            }),
            default: null
          }
        }
      }
    }
  }
}
