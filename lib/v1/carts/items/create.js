
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
    oneOf: [
      {
        type: 'string',
        format: 'uuid'
      },
      {
        type: 'null'
      }
    ]
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

const externalDiscounts = {
  type: 'array',
  description: 'external discounts that only take either discount format',
  items: {
    anyOf: [
      {
        description: 'discount based on rate, e.g. 10% = 0.1. Client should will apply this based on the volume of that cart item.',
        additionalProperties: false,
        type: 'object',
        properties: {
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
          order_index: {
            type: 'integer'
          },
          currency: {
            type: 'string',
            minLength: 3,
            maxLength: 3
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
          'rate'
        ]
      },
      {
        description: 'discount based on value, e.g. 10 EUR = 10. Client should will subtract this from the volum of that cart item.',
        additionalProperties: false,
        type: 'object',
        properties: {
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
          order_index: {
            type: 'integer'
          },
          currency: {
            type: 'string',
            minLength: 3,
            maxLength: 3
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
          'value'
        ]
      },
      {
        description: 'discount based on amount total, e.g. 10 EUR = 10. Clients do no calculations and will subract this value from a cart item.',
        additionalProperties: false,
        properties: {
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
          client_id: {
            type: 'string',
            maxLength: 128
          },
          source_id: {
            type: 'string',
            maxLength: 128
          },
          cart_assignment_id: {
            type: 'string',
            maxLength: 128
          },
          cart_item_assignment_id: {
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
          'amount_total'
        ]
      },
      {
        description: 'discount based on amount per item, e.g. 10 EUR with qty 100 will be = 1000. Clientstake this value and multiply it by the qty.',
        additionalProperties: false,
        properties: {
          amount: {
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
          'amount'
        ]
      }
    ]
  }
}

const internalDiscounts = {
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
    ],
    default: null
  },
  client_id: {
    type: 'string',
    maxLength: 128
  },
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
    discounts: externalDiscounts,
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
    },
    discounts: externalDiscounts
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
    'salesman_staff',
    'tax',
    'account',
    'product_group',
    'name',
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
    discounts: internalDiscounts,
    attributes: {
      default: null,
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
  maxItems: 300,
  items: {
    anyOf: [
      // order is important: most specialised schema will win
      internalCart,
      externalCart,
      cartOfIds
    ]
  }
}
