const { oneOf } = require('../../../helpers/payload-or-null')
const productServiceAnswerObject = require('../../transactions/components/embedded/product_service_answer/base')
const returnReason = require('../../transactions/components/embedded/return/return_reason')
const voucherObject = require('../../transactions/components/embedded/voucher/base')
const customProperties = require('../../../common/custom_properties')
const addonObject = require('../../transactions/components/embedded/addon/base')

const masterData = {
  salesman_staff: {
    type: 'string',
    format: 'uuid'
  },
  tax: {
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
  addons: oneOf({
    description: 'The list of applied addons.',
    type: 'array',
    items: {
      ...addonObject
    }
  }),
  account: {
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
      external_reference_id: {
        description: 'A caller defined custom ID for the purpose of syncing from external resources, or to use in analytics.',
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
              'customer',
              'staff',
              'cart',
              'product_set',
              'sconto',
              'item',
              'promotion',
              'voucher'
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
  ...masterData,
  custom_properties: {
    ...customProperties.implementation
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
    vat_rate_class: oneOf({
      default: 'normal',
      description: 'Rate class from \'taxes.rate_class\' according to international standards, used in Germany to map types for e.g. fiscalization',
      type: 'string',
      'enum': [
        'normal',
        'reduced',
        'super_reduced'
      ]
    }),
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
