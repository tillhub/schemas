const { oneOf } = require('../../../helpers/payload-or-null')

module.exports = {
  description: 'Payments grouped by payment options (and currencies if neccessary - and, if indicated by e.g. card cisrcuits).',
  additionalProperties: false,
  required: [
    'currency',
    'units'
  ],
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
  currency: {
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
      properties: {
        type: 'string',
        description: 'The payment option used as key',
        example: 'coin',
        enum: [
          'bill',
          'coin'
        ],
        qty: {
          default: null,
          ...oneOf({
            type: 'number',
            description: 'The quantity of this unit.',
            example: 7,
            minimum: 0,
            maximum: 32767,
            multipleOf: 1
          })
        },
        value: {
          example: '0.10',
          description: 'The amount by summing all tips for that configuration in that balance.',
          type: 'number',
          minimum: 0,
          maximum: 1000000,
          multipleOf: 0.01
        }
      }
    }
  },
  branch: {
    ...oneOf({
      type: 'string',
      format: 'uuid',
      example: 'f2ac2cae-97ff-42a1-967b-0a35222ab6d1',
      description: 'The Tillhub branch location ID. If none is specified we will use the one from the transaction.'
    }),
    default: null
  },
  register: {
    ...oneOf({
      type: 'string',
      format: 'uuid',
      example: '9d110eb2-2245-4e14-9574-49b502f3a9b3',
      description: 'The Tillhub register location ID. If none is specified we will use the one from the transaction.'
    }),
    default: null
  },
  metadata: {
    ...oneOf({
      type: 'object',
      description: 'A container for storing arbitrary metadata. This might be altered by API.'
    }),
    default: null
  }
}
