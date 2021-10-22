module.exports = {
  $id: 'https://schemas.tillhub.com/v1/products.search.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  // additional properties are a little bit of a danger zone of not being validated by the upstream service
  additionalProperties: true,
  required: [
    'q'
  ],
  properties: {
    q: {
      type: 'string',
      minLength: 3,
      maxLength: 256
    },
    types: {
      type: 'array',
      items: {
        type: 'string',
        enum: ['composed_product', 'variant_product', 'linked_product', 'product', 'voucher', 'variant', 'linked']
      }
    },
    branch: {
      type: 'string',
      format: 'uuid'
    },
    location: {
      type: 'string',
      format: 'uuid'
    },
    stockable: {
      type: 'string',
      enum: ['false', 'true']
    },
    sellable: {
      type: 'string',
      enum: ['false', 'true']
    },
    purchasable: {
      type: 'string',
      enum: ['false', 'true']
    },
    limit: {
      type: 'number',
      minimum: 1,
      default: 100
    },
    offset: {
      type: 'number',
      minimum: 0,
      default: 0
    },
    timeout: {
      type: 'number',
      maximum: 1500,
      minimum: 300,
      default: 1500
    },
    filter: {
      oneOf: [
        {
          type: 'string',
          enum: ['contains', 'starts_with', 'search']
        },
        {
          type: 'array',
          maxItems: 2,
          minItems: 2,
          items: {
            type: 'string',
            enum: ['contains', 'starts_with', 'search']
          }
        }
      ]
    }
  }
}
