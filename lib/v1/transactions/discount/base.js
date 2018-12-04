module.exports = {
  type: 'object',
  // additionalProperties: false,
  description: 'Any applied discounts as they happened at transaction creation time.',
  properties: {
    amount: {
      type: 'number'
    },
    amount_total: {
      type: 'number'
    },
    order_index: {
      type: 'integer'
    },
    currency: {
      type: 'string',
      minLength: 3,
      maxLength: 3
    },
    value: {
      oneOf: [
        {
          type: 'number'
        },
        {
          type: 'null'
        }
      ]
    },
    rate: {
      oneOf: [
        {
          type: 'number',
          minimum: 0,
          maximum: 1
        },
        {
          type: 'null'
        }
      ]
    },
    client_id: {
      type: 'string',
      maxLength: 128
    },
    group: {
      type: 'string',
      enum: [
        'customer',
        'staff',
        'cart',
        'product_set'
      ]
    },
    name: {
      type: 'string',
      minLength: 1,
      maxLength: 128
    }
  },
  required: [
    'amount',
    'amount_total',
    'currency',
    'name',
    'value',
    'rate'
  ]
}
