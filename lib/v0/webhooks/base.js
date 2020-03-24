module.exports = {
  client_account: {
    description: 'The client account id of the user.',
    type: 'string'
  },
  resource: {
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
  },
  action: {
    type: 'string',
    enum: [
      'create',
      'update',
      'delete'
    ]
  },
  type: {
    type: 'string',
    enum: [
      'incoming',
      'outgoing'
    ]
  },
  url: {
    type: 'string'
  },
  secret: {
    type: 'string'
  },
  content_type: {
    type: 'string',
    enum: [
      'json'
    ]
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
