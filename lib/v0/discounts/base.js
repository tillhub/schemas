const { oneOf } = require('../../helpers/payload-or-null')
const { timeConstraints } = require('../../common/time_constraints')

module.exports = {
  amount: {
    default: null,
    oneOf: [
      {
        description: 'DEPRECATED: use value or rate in order to avoid polymorphism',
        type: 'number',
        minimum: 0
      },
      {
        type: 'null'
      }
    ]
  },
  currency: {
    description: 'The currency selector for a discount. NOTE: currency will be enforced soon if value is set',
    oneOf: [
      {
        type: 'string',
        minLength: 3,
        maxLength: 3
      },
      {
        type: 'null'
      }
    ]
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
    description: 'Relative value of this discount.',
    oneOf: [
      {
        type: 'number',
        minimum: 0,
        maximum: 1,
        multipleOf: 0.00001
      },
      {
        type: 'null'
      }
    ]
  },
  type: {
    type: 'string',
    'enum': [
      'percentage',
      'value'
    ]
  },
  behaviors: {
    oneOf: [
      {
        type: 'object',
        additionalProperties: false,
        properties: {
          automatic: {
            description: 'If true - this discount will be automatically applied to a cart item according to it\'s constraints and ordering',
            type: 'boolean',
            default: false
          },
          display: {
            oneOf: [
              {
                type: 'object',
                additionalProperties: false,
                properties: {
                  show_inactive: oneOf({
                    type: 'boolean'
                  })
                }
              },
              {
                type: 'null'
              }
            ]
          },
          cart: {
            oneOf: [
              {
                type: 'string',
                'enum': [
                  'per_item',
                  'per_cart'
                ],
                default: 'per_item'
              },
              {
                type: 'null'
              }
            ]
          }
        }
      },
      {
        type: 'null'
      }
    ]
  },
  account: {
    anyOf: [
      {
        type: 'string',
        maxLength: 128
      },
      {
        type: 'null'
      }
    ]
  },
  name: {
    anyOf: [
      {
        type: 'string',
        maxLength: 64
      },
      {
        type: 'null'
      }
    ]
  },
  group: {
    type: 'string',
    'enum': [
      'cart',
      'customer',
      'item'
    ]
  },
  active: {
    type: 'boolean',
    default: true
  },
  deleted: {
    type: 'boolean',
    default: false
  },
  constraints: {
    oneOf: [
      {
        type: 'object',
        additionalProperties: false,
        properties: {
          products: {
            description: 'The tillhub product ressources the discount can be applied to (NULL == all)',
            oneOf: [
              {
                type: 'array',
                items: {
                  type: 'string',
                  format: 'uuid'
                }
              },
              {
                type: 'null'
              }
            ]
          },
          product_groups: {
            description: 'The tillhub product group ressources the discount can be applied to (NULL == all)',
            oneOf: [
              {
                type: 'array',
                items: {
                  type: 'string',
                  format: 'uuid'
                }
              },
              {
                type: 'null'
              }
            ]
          },
          taxes: {
            description: 'The tillhub tax ressources the discount can be applied to (NULL == all)',
            oneOf: [
              {
                type: 'array',
                items: {
                  type: 'string',
                  format: 'uuid'
                }
              },
              {
                type: 'null'
              }
            ]
          },
          time: oneOf({
            ...timeConstraints
          })
        }
      },
      {
        type: 'null'
      }
    ]
  },
  locations: {
    oneOf: [
      {
        type: 'array',
        items: {
          type: 'string',
          format: 'uuid'
        }
      },
      {
        type: 'null'
      }
    ]
  },
  branch_groups: {
    oneOf: [
      {
        type: 'array',
        items: {
          type: 'string',
          format: 'uuid'
        }
      },
      {
        type: 'null'
      }
    ]
  },
  order: {
    oneOf: [
      {
        description: 'Defines the (re)ordering of discounts when applied as: order==\'first\' > order==\'null\' > order==\'last\' > group==\'customer\'',
        type: 'string',
        enum: [
          'first',
          'last'
        ]
      },
      {
        type: 'null'
      }
    ]
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
  group_on_receipt: {
    type: 'boolean',
    default: false
  }
}
