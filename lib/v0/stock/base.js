const { oneOf } = require('../../helpers/payload-or-null')

module.exports = {
  qty: {
    anyOf: [
      {
        type: 'null'
      },
      {
        type: 'number'
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
    type: 'string',
    format: 'uuid'
  })
}
