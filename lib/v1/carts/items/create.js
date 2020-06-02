const { oneOf } = require('../../../helpers/payload-or-null')
const productServiceAnswerObject = require('../../transactions/components/embedded/product_service_answer/base')
const returnReason = require('../../transactions/components/embedded/return/return_reason')
const voucherObject = require('../../transactions/components/embedded/voucher/base')

const masterData = {
  salesman_staff: {
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
          'product_set',
          'sconto'
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
      assignment_id: {
        description: 'Identification of the process that created this discount',
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
      assignment_source: {
        description: 'Identification of the source of the process that created this discount',
        oneOf: [
          {
            type: 'string',
            enum: [
              'cart',
              'item',
              'customer',
              'sconto'
            ]
          },
          {
            type: 'null'
          }
        ]
      },
      name: {
        type: 'string',
        minLength: 1,
        maxLength: 128
      }
    },
    anyOf: [
      {
        required: [
          'amount',
          'amount_total',
          'currency',
          'name',
          'value'
        ]
      },
      {
        required: [
          'amount',
          'amount_total',
          'currency',
          'name',
          'rate'
        ]
      },
      {
        required: [
          'amount',
          'amount_total',
          'currency',
          'name',
          'value',
          'rate'
        ]
      }
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
    product_supplier_name: {
      oneOf: [
        {
          type: 'string',
          description: 'Custom identifier for the product\'s supplier',
          maxLength: 128
        },
        {
          type: 'null'
        }
      ]
    },
    is_service: {
      oneOf: [
        {
          type: 'boolean',
          default: false,
          description: 'If true, this item represents a service and might come with answers to service questions'
        },
        {
          type: 'null'
        }
      ]
    },
    discountable: {
      // supports correct discount behavior without product lookup
      oneOf: [
        {
          type: 'boolean'
        },
        {
          type: 'null'
        }
      ]
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
    discountable: {
      // supports correct discount behavior without product lookup
      oneOf: [
        {
          type: 'boolean'
        },
        {
          type: 'null'
        }
      ]
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
    product_supplier_name: {
      oneOf: [
        {
          type: 'string',
          description: 'Custom identifier for the product\'s supplier',
          maxLength: 128
        },
        {
          type: 'null'
        }
      ]
    },
    is_service: {
      oneOf: [
        {
          type: 'boolean',
          default: false,
          description: 'If true, this item represents a service and might come with answers to service questions'
        },
        {
          type: 'null'
        }
      ]
    },
    discountable: {
      // supports correct discount behavior without product lookup
      oneOf: [
        {
          type: 'boolean'
        },
        {
          type: 'null'
        }
      ]
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
    promotion_amount: oneOf({
      description: 'The promotion amount on the per unit qty base of 1.',
      type: 'number',
      minimum: -1000000,
      maximum: 1000000,
      multipleOf: 0.01
    }),
    promotion_amount_total: oneOf({
      description: 'The total promotion amount.',
      type: 'number',
      minimum: -1000000,
      maximum: 1000000,
      multipleOf: 0.01
    }),
    product_service_answers: oneOf({
      type: 'array',
      description: 'A list of answers to product service questions',
      items: {
        ...productServiceAnswerObject
      }
    }),
    is_voucher: {
      ...oneOf({
        type: 'boolean',
        default: false,
        description: 'If true, this item represents a voucher and must come with voucher information in \'voucher\''
      })
    },
    voucher: {
      ...oneOf({
        ...voucherObject
      }),
      default: null
    },
    is_refund: {
      ...oneOf({
        type: 'boolean',
        description: 'If true, the item was created by (partially) refunding a previous sale.'
      })
    },
    return_reason: returnReason,
    attributes_description: {
      ...oneOf({
        type: 'string',
        example: 'red | big | 32',
        description: 'A short description of the child attributes in variant products'
      })
    },
    reference_cartitem_client_id: {
      ...oneOf({
        type: 'string',
        example: '01331B44-130B-45D4-97A7-401247FD5B68',
        description: 'In cases of refund or cancellation, or invoicing a delivery note or selling a saved cart: the client_id of the origin item'
      })
    },
    used_barcode: {
      ...oneOf({
        type: 'string',
        example: '0E9761310XF',
        description: 'The barcode used to trigger putting this item into the cart (defaults to the first available barcode from the product)'
      })
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
