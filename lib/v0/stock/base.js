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
  from: {
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
  to: {
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
  status: {
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
  },
  metadata: {
    type: 'object'
  }
}
