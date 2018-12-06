module.exports = {
  type: 'object',
  additionalProperties: false,
  description: 'Any applied discounts as they happened at transaction creation time.',
  properties: {
    amount: {
      description: 'The effective amount for this discount per single item',
      type: 'number',
      minimum: -1000000,
      maximum: 1000000,
      multipleOf: 0.01
    },
    amount_total: {
      description: 'The effective amount for this discount per qty items',
      type: 'number',
      minimum: -1000000,
      maximum: 1000000,
      multipleOf: 0.01
    },
    order_index: {
      type: 'integer',
      minimum: 0,
      maximum: 100
    },
    currency: {
      type: 'string',
      minLength: 3,
      maxLength: 3
    },
    value: {
      description: 'The absolut reduction via this voucher',
      oneOf: [
        {
          type: 'number',
          minimum: -1000000,
          maximum: 1000000,
          multipleOf: 0.01
        },
        {
          type: 'null'
        }
      ]
    },
    rate: {
      description: 'The relative reduction via this voucher',
      oneOf: [
        {
          type: 'number',
          minimum: 0,
          maximum: 1,
          multipleOf: 0.001
        },
        {
          type: 'null'
        }
      ]
    },
    client_id: {
      description: 'Client id to map this object back',
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
