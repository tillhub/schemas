
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
  oneOf: [
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
  comments: {
    type: 'string',
    maxLength: 4096
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
    }
  }
}

const internalCart = {
  additionalProperties: false,
  type: 'object',
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
    vat_rate: {
      type: 'number',
      minimum: 0,
      maximum: 1
    },
    ...base,
    attributes: {
      type: 'object'
    }
  },
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
    'discounts'
  ]
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
