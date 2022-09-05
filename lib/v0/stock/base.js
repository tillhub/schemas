const { oneOf } = require('../../helpers/payload-or-null')

module.exports = {
  qty: {
    anyOf: [
      {
        type: 'null'
      },
      {
        type: 'number',
        description: 'The quantity of this item/product.',
      }
    ]
  },
  product: {
    anyOf: [
      {
        type: 'string',
        minLength: 1,
        maxLength: 64
      },
      {
        type: 'null'
      }
    ]
  },
  location: {
    anyOf: [
      {
        type: 'string',
        description: 'Alphanumerical uuid of the location, e.g. branch or warehouse',
        minLength: 1,
        maxLength: 64
      },
      {
        type: 'null'
      }
    ]
  },
  location_type: {
    anyOf: [
      {
        type: 'string',
        description: 'Location type of stock',
        'enum': [
          'client',
          'branch',
          'warehouse',
          'warehouse_shelf'
        ]
      },
      {
        type: 'null'
      }
    ]
  },
  status: oneOf({
    type: 'string',
    'enum': [
      'available',
      'sold',
      'purchased',
      'reserved',
      'transit_outgoing',
      'transit_incoming',
      'delivered',
      'selected'
    ]
  }),
  metadata: oneOf({
    type: 'object'
  }),
  reasons: oneOf({
    description: 'Deprecated property. Use reason instead.',
    type: 'string',
    format: 'uuid'
  }),
  reason: oneOf({
    type: 'string',
    format: 'uuid'
  }),
  comments: oneOf({
    type: 'string',
    minLength: 1,
    maxLength: 2048
  })
}
