const { anyOf, oneOf } = require('../../../helpers/payload-or-null')
const productServiceAnswerObject = require('../../transactions/components/embedded/product_service_answer/base')
const returnReason = require('../../transactions/components/embedded/return/return_reason')
const voucherObject = require('../../transactions/components/embedded/voucher/base')
const customProperties = require('../../../common/custom_properties')

const masterData = {
  salesman_staff: {
    description: 'Staff person ID',
    example: '68722313-4077-42eb-8cc2-bf3359940efc',
    ...oneOf({
      type: 'string',
      format: 'uuid'
    })
  },
  tax: {
    description: 'Tax rate ID. If not present, the "vat_rate" must be present. The active tax with such ID must be defined in the system',
    type: 'string',
    format: 'uuid'
  },
  account: {
    description: 'Account ID',
    type: 'string',
    format: 'uuid'
  },
  account_number: {
    description: 'Account number. The only one active account with the same number must be defined in the system (does not apply when "account" value is present)',
    ...oneOf({
      type: 'string'
    })
  },
  product_group: {
    description: 'Product group ID',
    ...oneOf({
      type: 'string',
      format: 'uuid'
    })
  }
}

const amount = {
  description: 'The gross/net input price per quantity of 1.0 and before any discounts',
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
      description: 'A monetary value as .2Decimal excluding taxes, $10 = 10.00',
      type: 'number',
      minimum: -1000000,
      maximum: 1000000,
      multipleOf: 0.01
    },
    gross: {
      description: 'A monetary value as .2Decimal including taxes, 10€ = 10.00',
      type: 'number',
      minimum: -1000000,
      maximum: 1000000,
      multipleOf: 0.01
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
            ...oneOf({
              type: 'number',
              minimum: 0,
              maximum: 1
            })
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
              'product_set',
              'item'
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
            ...oneOf({
              type: 'number'
            })
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
              'product_set',
              'item'
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
              'product_set',
              'item'
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
              'product_set',
              'item'
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
      type_name: {
        type: 'string',
        enum: [
          'percentage',
          'value'
        ],
        description: 'The value interpretation type of the discount, needed to map from transaction legacy discounts and back, value and rate will be still respected'
      },
      group: {
        type: 'string',
        enum: [
          'customer',
          'staff',
          'cart',
          'product_set',
          'sconto',
          'item',
          'promotion',
          'voucher'
        ],
        description: 'The logical group type of the discount, reflecting it\'s origin.'
      },
      value: {
        ...oneOf({
          type: 'number'
        })
      },
      rate: {
        ...oneOf({
          type: 'number',
          minimum: 0,
          maximum: 1
        })
      },
      client_id: {
        type: 'string',
        maxLength: 128
      },
      external_reference_id: {
        description: 'A caller defined custom ID for the purpose of syncing from external resources, or to use in analytics.',
        ...oneOf({
          type: 'string',
          maxLength: 128
        })
      },
      source_id: {
        description: 'The Tillhub discount resource (if available)',
        ...oneOf({
          type: 'string',
          format: 'uuid'
        })
      },
      assignment_id: {
        description: 'Identification of the process that created this discount',
        ...oneOf({
          type: 'string',
          maxLength: 128
        })
      },
      assignment_source: {
        description: 'Identification of the source of the process that created this discount',
        ...oneOf({
          type: 'string',
          enum: [
            'customer',
            'staff',
            'cart',
            'product_set',
            'sconto',
            'item',
            'promotion',
            'voucher',
            'product_voucher'
          ]
        })
      },
      name: {
        type: 'string',
        minLength: 1,
        maxLength: 128
      },
      is_automatic: oneOf({
        type: 'boolean',
        default: false,
        description: 'If true, this discount was trigger automatically.'
      }),
      order: oneOf({
        type: 'string',
        enum: [
          'first',
          'last'
        ],
        default: 'last'
      }),
      vat_rate_class: oneOf({
        default: 'normal',
        description: 'Rate class from \'taxes.rate_class\' according to international standards, used in Germany to map types for e.g. fiscalization',
        type: 'string',
        'enum': [
          'normal',
          'reduced',
          'super_reduced'
        ]
      })
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
    description: 'Cart item display name',
    type: 'string',
    minLength: 1,
    maxLength: 128
  },
  position: {
    description: 'Cart item position',
    type: 'number',
    minimum: 0
  },
  comments: {
    description: 'Additional comments',
    ...anyOf({
      type: 'string',
      maxLength: 4096
    }),
    default: null
  },
  client_id: {
    type: 'string',
    maxLength: 128
  },
  custom_properties: {
    ...customProperties.implementation
  },
  ...masterData
}

const externalCart = {
  additionalProperties: false,
  type: 'object',
  properties: {
    product: {
      description: 'The Tillhub product unique identifier',
      example: 'aa165950-26f1-4a59-a85a-1c6017b3cb79',
      type: 'string',
      format: 'uuid'
    },
    custom_id: {
      description: 'The product.custom_id as stated in https://tillhub.atlassian.net/browse/TM-5665',
      example: '260620-727-DE',
      type: 'string',
      maxLength: 128
    },
    product_supplier_name: {
      description: 'Custom identifier for the product\'s supplier',
      ...oneOf({
        type: 'string',
        maxLength: 128
      })
    },
    is_service: {
      description: 'If true, this item represents a service and might come with answers to service questions',
      default: false,
      ...oneOf({
        type: 'boolean'
      })
    },
    discountable: {
      description: 'Supports correct discount behavior without product lookup',
      ...oneOf({
        type: 'boolean'
      })
    },
    qty: {
      description: 'Product quantity in the cart',
      example: 2,
      type: 'number'
    },
    currency: {
      description: 'Currency symbol',
      example: 'EUR',
      type: 'string',
      minLength: 3,
      maxLength: 3
    },
    amount: {
      description: 'The currency / amount object combination is the Tillhub Money object. In this context it is the price of 1 item. The total will price * qty.',
      ...amount
    },
    vat_rate: {
      description: 'VAT rate in the range 0-1. Required when "tax" value is not present. The only one active VAT with the same rate must be defined in the system (does not apply when "tax" value is present)',
      example: 0.12,
      type: 'number',
      minimum: 0,
      maximum: 1
    },
    discounts: externalDiscounts,
    ...base
  },
  anyOf: [{
    required: [
      'custom_id',
      'qty',
      'name',
      'currency',
      'amount',
      'tax'
    ]
  }, {
    required: [
      'custom_id',
      'qty',
      'name',
      'currency',
      'amount',
      'vat_rate'
    ]
  }]
}

const cartOfIds = {
  additionalProperties: false,
  type: 'object',
  properties: {
    position: {
      description: 'Cart item position',
      type: 'number',
      minimum: 0
    },
    discountable: {
      description: 'Supports correct discount behavior without product lookup',
      ...oneOf({
        type: 'boolean'
      })
    },
    product: {
      description: 'Identifier of the product',
      example: 'cd0a2886-e245-4ed9-a758-443e7e5b3a3f',
      type: 'string'
      // format: 'uuid'
    },
    qty: {
      description: 'Product quantity in the cart',
      example: 2,
      type: 'number'
    },
    currency: {
      description: 'Currency symbol',
      example: 'EUR',
      type: 'string',
      minLength: 3,
      maxLength: 3
    },
    client_id: {
      type: 'string',
      maxLength: 128
    },
    discounts: externalDiscounts
  },
  required: [
    'product',
    'currency',
    'qty'
  ]
}

const internalCart = {
  additionalProperties: false,
  type: 'object',
  properties: {
    product: {
      description: 'Identifier of the product',
      example: 'cd0a2886-e245-4ed9-a758-443e7e5b3a3f',
      type: 'string',
      format: 'uuid'
    },
    product_supplier_name: {
      description: 'Custom identifier for the product\'s supplier',
      example: '00555kff34323',
      ...oneOf({
        type: 'string',
        maxLength: 128
      })
    },
    is_service: {
      description: 'If true, this item represents a service and might come with answers to service questions',
      ...oneOf({
        type: 'boolean',
        default: false
      })
    },
    discountable: {
      description: 'Supports correct discount behavior without product lookup',
      ...oneOf({
        type: 'boolean'
      })
    },
    qty: {
      description: 'Product quantity in the cart',
      example: 2,
      type: 'number'
    },
    custom_id: {
      description: 'Custom cart item ID',
      ...oneOf({
        type: 'string',
        maxLength: 128
      })
    },
    vat_rate: {
      description: 'VAT rate in the range 0-1. Required when "tax" value is not present. The only one active VAT with the same rate must be defined in the system (does not apply when "tax" value is present)',
      example: 0.12,
      type: 'number',
      minimum: 0,
      maximum: 1
    },
    vat_rate_class: {
      description: 'Rate class from \'taxes.rate_class\' according to international standards, used in Germany to map types for e.g. fiscalization',
      default: 'normal',
      ...oneOf({
        type: 'string',
        'enum': [
          'normal',
          'reduced',
          'super_reduced'
        ]
      })
    },
    currency: {
      description: 'Currency symbol',
      example: 'EUR',
      type: 'string',
      minLength: 3,
      maxLength: 3
    },
    amount,
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
      description: 'If true, this item represents a voucher and must come with voucher information in \'voucher\'',
      default: false,
      ...oneOf({
        type: 'boolean'
      })
    },
    voucher: {
      ...oneOf({
        ...voucherObject
      }),
      default: null
    },
    is_refund: {
      description: 'If true, the item was created by (partially) refunding a previous sale.',
      ...oneOf({
        type: 'boolean'
      })
    },
    return_reason: returnReason,
    attributes_description: {
      description: 'A short description of the child attributes in variant products',
      example: 'red | big | 32',
      ...oneOf({
        type: 'string'
      })
    },
    reference_cartitem_client_id: {
      description: 'In cases of refund or cancellation, or invoicing a delivery note or selling a saved cart: the client_id of the origin item',
      example: '01331B44-130B-45D4-97A7-401247FD5B68',
      ...oneOf({
        type: 'string'
      })
    },
    used_barcode: {
      description: 'The barcode used to trigger putting this item into the cart (defaults to the first available barcode from the product)',
      example: '0E9761310XF',
      ...oneOf({
        type: 'string'
      })
    },
    ...base,
    discounts: internalDiscounts,
    attributes: {
      default: null,
      ...anyOf({
        type: 'object'
      })
    }
  },
  anyOf: [{
    required: [
      'product',
      'qty',
      'custom_id',
      'salesman_staff',
      'name',
      'discounts',
      'amount',
      'currency',
      'tax'
    ]
  }, {
    required: [
      'product',
      'qty',
      'custom_id',
      'salesman_staff',
      'name',
      'discounts',
      'amount',
      'currency',
      'vat_rate'
    ]
  }]
}

module.exports = {
  type: 'array',
  minItems: 1,
  maxItems: 300,
  items: {
    anyOf: [
      // order is important: most specialized schema will win
      internalCart,
      externalCart,
      cartOfIds
    ]
  }
}
