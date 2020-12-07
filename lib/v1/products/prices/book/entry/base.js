const { oneOf } = require('../../../../../helpers/payload-or-null')

module.exports = {
  price_book: {
    description: 'The reference to the price book',
    type: 'string',
    format: 'uuid'
  },
  product: {
    description: 'The reference to the product',
    type: 'string',
    format: 'uuid'
  },
  name: {
    ...oneOf({
      description: 'Price book item name',
      type: 'string',
      maxLength: 512
    })
  },
  summary: {
    description: 'Short summary of the price book item',
    ...oneOf({
      type: 'string',
      maxLength: 1024
    })
  },
  active: {
    type: 'boolean'
  },
  deleted: {
    type: 'boolean'
  },
  locations: oneOf({
    type: 'array',
    items: {
      type: 'string',
      format: 'uuid'
    }
  }),
  clients: oneOf({
    type: 'array',
    items: {
      type: 'string',
      format: 'uuid'
    }
  }),
  external_reference_id: {
    description: 'A caller defined custom ID for the purpose of syncing from external resources, or to use in analytics.',
    ...oneOf({
      type: 'string',
      maxLength: 128
    })
  },
  constraints: {
    ...oneOf(require('../constraints'))
  },
  value_type: {
    type: 'string',
    // NOTE: we leave the usual logic for easier data consumption of clients.
    description: 'Value types restrict the pricing to the value fields (amount_net & amount_gross or rate). If all of those are set the value_type counts. If there is no value_type, amount fields take precedence.',
    enum: [
      'rate',
      'value'
    ]
  },
  amount_net: {
    ...oneOf({
      example: '27633.02',
      type: 'number',
      minimum: 0,
      maximum: 1000000,
      multipleOf: 0.01
    })
  },
  amount_gross: {
    ...oneOf({
      example: '27633.02',
      type: 'number',
      minimum: 0,
      maximum: 1000000,
      multipleOf: 0.01
    })
  },
  rate: {
    description: 'Relative value of this product based on any other applicable price.',
    ...oneOf({
      type: 'number',
      multipleOf: 0.0001
    })
  },
  discounted_by: {
    description: 'The discounting applied in the price book item',
    ...oneOf({
      type: 'number',
      multipleOf: 0.0001
    })
  },
  metadata: {
    ...oneOf({
      type: 'object'
    })
  },
  currency: {
    ...oneOf({
      type: 'string',
      description: 'The three letter [ISO currency](https://en.wikipedia.org/wiki/ISO_4217) of this item.',
      example: 'EUR',
      minLength: 3,
      maxLength: 3
    })
  },
  tax: {
    ...oneOf({
      type: 'string',
      format: 'uuid'
    })
  }
}
