
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

const externalCart = {
  additionalProperties: false,
  type: 'object',
  required: [
    'custom_id',
    'qty',
    'name',
    'currency',
    'amount',
    'tax',
    'account'
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
      type: 'string',
      minlength: 1,
      maxLength: 128
    },
    currency: {
      type: 'string',
      minLength: 3,
      maxLength: 3
    },
    amount: {
      ...amount,
      description: 'the currency / amount object combination is the Tillhub Money object. In this context it is the price of 1 item. The total will price * qty.'
    },
    vat_rate: {
      type: 'number',
      minimum: 0,
      maximum: 1
    },
    ...base
  }
}

const cartOfIds = {
  required: [
    'product',
    'currency',
    'qty'
  ],
  additionalProperties: false,
  type: 'object',
  properties: {
    position: {
      type: 'number',
      minimum: 0
    },
    product: {
      type: 'string'
      // format: 'uuid'
    },
    qty: {
      type: 'number'
    },
    currency: {
      type: 'string',
      minLength: 3,
      maxLength: 3
    },
    client_id: {
      type: 'string',
      maxLength: 128
    }
  }
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
    anyOf: [
      externalCart,
      cartOfIds,
      internalCart
    ]
  }
}
