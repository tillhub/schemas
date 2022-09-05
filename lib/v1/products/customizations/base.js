const { oneOf } = require('../../../helpers/payload-or-null')

module.exports = {
  product: {
    description: 'The reference to the actual product',
    type: 'string',
    format: 'uuid'
  },
  customer: {
    description: 'The reference to customer this product might be customized for',
    type: 'string',
    format: 'uuid'
  },
  name: {
    description: 'Product name',
    type: 'string',
    maxLength: 512
  },
  summary: {
    description: 'Short summary of the product',
    oneOf: [
      {
        type: 'string',
        maxLength: 1024
      },
      {
        type: 'null'
      }
    ]
  },
  description: {
    description: 'Long description of a product',
    oneOf: [
      {
        type: 'string',
        maxLength: 16384
      },
      {
        type: 'null'
      }
    ]
  },
  attributes: {
    description: 'Arbitrary attributes a product has, that will be displayed in e.g. a sale',
    anyOf: [
      {
        type: 'object'
      },
      {
        type: 'null'
      }
    ]
  },
  prices: require('../common/prices'),
  metadata: {
    anyOf: [
      {
        type: 'object'
      },
      {
        type: 'null'
      }
    ]
  },
  brand: {
    anyOf: [
      {
        type: 'string'
      },
      {
        type: 'null'
      }
    ]
  },
  active: {
    type: 'boolean',
    default: true
  },
  deleted: {
    type: 'boolean',
    default: false
  },
  supplier: oneOf({
    type: 'object',
    properties: {
      'sku': oneOf({
        type: 'string'
      }, { default: '' })
    }
  }),
  locations: oneOf({
    type: 'array',
    items: {
      type: 'string',
      format: 'uuid'
    }
  }),
  condition: {
    anyOf: [
      {
        type: 'string'
      },
      {
        type: 'null'
      }
    ]
  },
  images: {
    oneOf: [
      {
        type: 'object',
        additionalProperties: false,
        properties: {
          'original': oneOf({
            type: 'string',
            format: 'uri'
          }, { default: null }),
          '1x': oneOf({
            type: 'string',
            format: 'uri'
          }, { default: null }),
          '2x': oneOf({
            type: 'string',
            format: 'uri'
          }, { default: null }),
          '3x': oneOf({
            type: 'string',
            format: 'uri'
          }, { default: null }),
          lia_1x: oneOf({
            type: 'string',
            format: 'uri'
          }, { default: null }),
          lia_2x: oneOf({
            type: 'string',
            format: 'uri'
          }, { default: null }),
          lia_3x: oneOf({
            type: 'string',
            format: 'uri'
          }, { default: null }),
          square_1x: oneOf({
            type: 'string',
            format: 'uri'
          }, { default: null }),
          square_2x: oneOf({
            type: 'string',
            format: 'uri'
          }, { default: null }),
          square_3x: oneOf({
            type: 'string',
            format: 'uri'
          }, { default: null }),
          avatar: {
            type: 'string',
            format: 'uri'
          }
        }
      },
      {
        type: 'null'
      }
    ]
  },

  client_id: {
    description: 'A client definable ID for the purpose of syncing to a client or used in analytics for e.g. transactions that created a product offline and done transactions offline before they received a backend ID.',
    oneOf: [
      {
        type: 'string',
        maxLength: 128
      },
      {
        type: 'null'
      }
    ]
  },
  external_reference_id: {
    description: 'A caller defined custom ID for the purpose of syncing from external resources, or to use in analytics.',
    oneOf: [
      {
        type: 'string',
        maxLength: 128
      },
      {
        type: 'null'
      }
    ]
  },
  service_questions: oneOf({
    type: 'array',
    description: 'An array of actual service questions and their answers. This can be essentially used as service card i.e. for a customer.',
    items: {
      type: 'object',
      additionalProperties: false,
      required: [
        'id',
        'answer'
      ],
      properties: {
        id: {
          description: 'The reference to the product service question. Resolve from content from that resource.',
          type: 'string',
          format: 'uuid'
        },
        answer: {
          description: 'The answer based on the the answer validation of the product service question.',
          oneOf: [
            {
              type: 'object'
            },
            {
              type: 'null'
            }
          ]
        }
      }
    }
  }),
  loyalty_values: oneOf({
    type: 'array',
    description: 'The amount of loyalty values that a customer receives per product. They will be used then the loyalty system specifies "lookup" as a base in the value configurations. The unit is also determined in the loyalty system configurations.',
    minItems: 1,
    items: {
      type: 'object',
      additionalProperties: false,
      required: [
        'unit',
        'amount'
      ],
      properties: {
        unit: {
          type: 'string',
          minLength: 1,
          maxLength: 64,
          examples: [
            'miles',
            'points',
            'EUR',
            'USD'
          ]
        },
        amount: {
          type: 'number',
          minimum: 0,
          maximum: 1000000,
          multipleOf: 0.01
        }
      }
    }
  })
}
