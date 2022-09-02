module.exports = {
  scopes: {
    type: 'array',
    uniqueItems: true,
    default: [
      'vouchers:read:one',
      'vouchers:update:one'
    ],
    items: {
      type: 'string',
      enum: [
        'products:read',
        'products:read:one',
        'vouchers:admin',
        'vouchers:create',
        'vouchers:read',
        'vouchers:read:one',
        'vouchers:update',
        'vouchers:update:one',
        'vouchers:delete'
      ]
    }
  }
}
