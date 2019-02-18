
const masterData = {
  salesman_staff: {
    type: 'string',
    format: 'uuid'
  },
  tax: {
    type: 'string',
    format: 'uuid'
  },
  account: {
    type: 'string',
    format: 'uuid'
  },
  product_group: {
    type: 'string',
    format: 'uuid'
  }
}

const amount = {
  description: 'the currency / amount object combination is the Tillhub Money object.',
  type: 'object',
  additionalProperties: false,
  anyOf: [
    {
      required: [
        'net',
        'gross'
      ]
    },
    {
      required: [
        'net'
      ]
    },
    {
      required: [
        'gross'
      ]
    }
  ],
  properties: {
    net: {
      type: 'number'
    },
    gross: {
      type: 'number'
    }
  }
}

const discounts = {
  type: 'array',
  items: {
    additionalProperties: false,
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
      source_id: {
        description: 'The Tillhub discount resource (if available)',
        oneOf: [
          {
            type: 'string',
            format: 'uuid'
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
}

const base = {
  name: {
    type: 'string',
    minLength: 1,
    maxLength: 128
  },
  position: {
    type: 'number',
    minimum: 0
  },
  comments: {
    anyOf: [
      {
        type: 'string',
        maxLength: 4096
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
  discounts,
  ...masterData
}

const internalCart = {
  additionalProperties: false,
  type: 'object',
  required: [
    'product',
    'qty',
    'custom_id',
    'vat_rate',
    'attributes',
    'salesman_staff',
    'tax',
    'account',
    'product_group',
    'name',
    'comments',
    'discounts',
    'currency',
    'amount',
    'amount_total',
    'revenue',
    'tax_amount',
    'tax_amount_total',
    'discount_amount',
    'discount_amount_total'
  ],
  properties: {
    product: {
      type: 'string',
      format: 'uuid'
    },
    qty: {
      type: 'number'
    },
    custom_id: {
      oneOf: [
        {
          type: 'string',
          maxLength: 128
        },
        {
          type: 'null'
        }
      ]
    },
    vat_rate: {
      type: 'number',
      minimum: 0,
      maximum: 1
    },
    currency: {
      type: 'string',
      minLength: 3,
      maxLength: 3
    },
    amount: {
      ...amount
    },
    amount_total: {
      ...amount
    },
    revenue: {
      ...amount
    },
    tax_amount: {
      type: 'number'
    },
    tax_amount_total: {
      type: 'number'
    },
    discount_amount: {
      type: 'number'
    },
    discount_amount_total: {
      type: 'number'
    },
    ...base,
    attributes: {
      anyOf: [
        {
          type: 'object'
        },
        {
          type: 'null'
        }
      ]
    }
  }
}

module.exports = {
  type: 'array',
  minItems: 1,
  maxItems: 100,
  items: {
    ...internalCart
  }
}
