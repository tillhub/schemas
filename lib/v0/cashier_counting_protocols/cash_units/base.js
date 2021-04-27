const { oneOf } = require('../../../helpers/payload-or-null')

const properties = {
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
        type: {
          type: 'string',
          example: 'coin',
          enum: [
            'bill',
            'coin'
          ]
        },
        qty: {
          default: null,
          ...oneOf({
            type: 'number',
            description: 'The quantity of this unit.',
            examples: [7],
            minimum: 0,
            maximum: 32767,
            multipleOf: 1
          })
        },
        value: {
          examples: [0.10],
          description: 'The amount by summing all cash for that bill/coin.',
          type: 'number',
          minimum: 0,
          maximum: 1000000,
          multipleOf: 0.01
        }
      }
    },
    minItems: 1
  }
}

module.exports = {
  anyOf: [{
    description: 'Payments grouped by payment options (and currencies if neccessary - and, if indicated by e.g. card cisrcuits).',
    additionalProperties: false,
    type: 'object',
    required: [
      'currency',
      'units'
    ],
    properties
  },
  {
    description: 'Payments grouped by payment options (and currencies if neccessary - and, if indicated by e.g. card cisrcuits).',
    additionalProperties: false,
    type: 'object',
    required: [
      'units'
    ],
    properties: {
      ...properties,
      units: {
        ...properties.units,
        minItems: 0,
        maxItems: 0
      }
    }
  }]
}
