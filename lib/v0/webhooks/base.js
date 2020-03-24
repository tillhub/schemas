module.exports = {
  client_account: {
    description: 'The client account id of the user.',
    type: 'string'
  },
  resource: {
    oneOf: [
      {
        type: 'null'
      },
      {
        type: 'string',
        enum: [
          'products',
          'stocks',
          'branches',
          'registers',
          'customers',
          'transactions',
          'balances',
          'carts',
          'delivery_notes',
          'correspondences'
        ]
      }
    ]
  },
  action: {
    oneOf: [
      {
        type: 'null'
      },
      {
        type: 'string',
        enum: [
          'create',
          'update',
          'delete'
        ]
      }]
  },
  type: {
    oneOf: [
      {
        type: 'null'
      },
      {
        type: 'string',
        enum: [
          'incoming',
          'outgoing'
        ]
      }]
  },
  url: {
    oneOf: [
      {
        type: 'null'
      },
      {
        type: 'string'
      }]
  },
  secret: {
    oneOf: [
      {
        type: 'null'
      },
      {
        type: 'string'
      }]
  },
  content_type: {
    oneOf: [
      {
        type: 'null'
      },
      {
        type: 'string',
        enum: [
          'json'
        ]
      }]
  },
  active: {
    description: 'Soft disable or enable this webhook.',
    type: 'boolean',
    default: true
  },
  deleted: {
    description: 'Soft delete this webhook.',
    type: 'boolean',
    default: false
  }
}
