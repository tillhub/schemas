
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
      order_index: {
        type: 'integer'
      },
      type: {
        type: 'string',
        enum: [
          'percentage',
          'value'
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
      'type',
      'amount',
      'name'
    ]
  }
}

const base = {
  name: {
    type: 'string',
    minlength: 1,
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
    'amount',
    'currency'
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
          minlength: 1,
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
