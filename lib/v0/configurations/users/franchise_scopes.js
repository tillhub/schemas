module.exports = {
  scopes: {
    type: 'array',
    uniqueItems: true,
    default: [
      'analytics:delegated'
    ],
    items: {
      type: 'string',
      enum: [
        'analytics:delegated',
        'analytics:delegated:audits.actions:type:carts.item.remove'
      ]
    }
  }
}
