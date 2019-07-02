const { oneOf } = require('../../helpers/payload-or-null')

const price = {
  amount: {
    type: 'object',
    properties: {
      net: {
        example: '27633.02',
        type: 'number',
        minimum: 0,
        maximum: 1000000,
        multipleOf: 0.01
      },
      gross: {
        example: '27633.02',
        type: 'number',
        minimum: 0,
        maximum: 1000000,
        multipleOf: 0.01
      }
    }
  },
  currency: {
    type: 'string',
    minLength: 3,
    maxLength: 3
  },
  percentage: {
    description: 'DEPRECATED',
    type: 'number'
  },
  purchase_price: {
    description: 'Define the opportunity cost or calculatory base price of this product and currency.',
    oneOf: [
      {
        example: '27633.02',
        type: 'number',
        minimum: 0,
        maximum: 1000000,
        multipleOf: 0.01
      },
      {
        type: 'null'
      }
    ]
  },
  cost: {
    description: 'Define additional cost.',
    oneOf: [
      {
        example: '27633.02',
        type: 'number',
        minimum: 0,
        maximum: 1000000,
        multipleOf: 0.01
      },
      {
        type: 'null'
      }
    ]
  },
  margin: {
    description: 'Add a margin to pruchase_price and cost to result in net.',
    oneOf: [
      {
        type: 'number',
        multipleOf: 0.0001
      },
      {
        type: 'null'
      }
    ]
  }
}

const stockConfigurationLocation = {
  type: 'array',
  items: {
    type: 'object',
    additionalProperties: false,
    properties: {
      location: oneOf({
        description: 'Alphanumerical uuid of the location, e.g. branch or warehouse',
        type: 'string'
      }),
      stockable: oneOf({
        type: 'boolean'
      }),
      stock_minimum: oneOf({
        type: 'number'
      }),
      reorder_qty: oneOf({
        description: 'The amount/quantity that should be used in a reorder',
        type: 'number'
      }),
      reorder_point: oneOf({
        description: 'Threshold at which a reorder should be triggered',
        type: 'number'
      })
    }
  }
}

module.exports = {
  name: {
    description: 'Product name',
    type: 'string',
    maxLength: 512
  },
  summary: {
    description: 'Short summary of the product',
    oneOf: [
      {
        type: 'string',
        maxLength: 1024
      },
      {
        type: 'null'
      }
    ]
  },
  description: {
    description: 'Long description of a product',
    oneOf: [
      {
        type: 'string',
        maxLength: 16384
      },
      {
        type: 'null'
      }
    ]
  },
  attributes: {
    description: 'Arbitrary attributes a product has, that will be displayed in e.g. a sale',
    anyOf: [
      {
        type: 'object'
      },
      {
        type: 'null'
      }
    ]
  },
  parent: {
    description: 'Only valid for child products (variant and linked)',
    anyOf: [
      {
        type: 'string'
      },
      {
        type: 'null'
      }
    ]
  },
  tags: {
    anyOf: [
      {
        type: 'array'
      },
      {
        type: 'null'
      }
    ]
  },
  linked_products: {
    description: 'Used to store linked_products (existing (can be any type, including `linked` and embedded (`full` product schema)',
    anyOf: [
      {
        type: 'array'
      },
      {
        type: 'null'
      }
    ]
  },
  prices: {
    anyOf: [
      {
        type: 'object',
        properties: {
          branch_prices: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                branch: {
                  // NOTE: to to legacy regression, we currently need to allow null branches
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
                prices: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      ...price
                    }
                  }
                }
              }
            }
          },
          scaled_prices: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                qty: {
                  type: 'number'
                },
                prices: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      ...price
                    }
                  }
                }
              }
            }
          },
          time_based_prices: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                time_range: {
                  type: 'object',
                  properties: {
                    start: {
                      type: 'string',
                      format: 'date-time'
                    },
                    end: {
                      type: 'string',
                      format: 'date-time'
                    }
                  },
                  required: [
                    'start',
                    'end'
                  ]
                },
                prices: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      ...price
                    }
                  }
                }
              }
            }
          },
          default_prices: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                ...price
              }
            }
          }
        },
        required: [
          'default_prices'
        ]
      },
      {
        type: 'null'
      }
    ]
  },
  barcode: {
    anyOf: [
      {
        type: 'string'
      },
      {
        type: 'null'
      }
    ]
  },
  sku: {
    oneOf: [
      {
        type: 'string'
      },
      {
        type: 'null'
      }
    ]
  },
  stock_minimum: {
    oneOf: [
      {
        type: 'number'
      },
      {
        type: 'null'
      }
    ]
  },
  stock_maximum: {
    description: 'The maximum resulting qty a location should have after a reorder',
    oneOf: [
      {
        type: 'number'
      },
      {
        type: 'null'
      }
    ]
  },
  reorder_point: {
    description: 'The stock level that triggers a reorder',
    oneOf: [
      {
        type: 'number'
      },
      {
        type: 'null'
      }
    ]
  },
  reorder_qty: {
    description: 'The default qty on any reorder',
    oneOf: [
      {
        type: 'number'
      },
      {
        type: 'null'
      }
    ]
  },
  stockable: {
    description: 'Define whether to keep track of stock of this product.',
    oneOf: [
      {
        type: 'boolean'
      },
      {
        type: 'null'
      }
    ]
  },
  discountable: {
    description: 'Define whether this product can receive a discount during a sale.',
    oneOf: [
      {
        type: 'boolean'
      },
      {
        type: 'null'
      }
    ]
  },
  linkable: {
    description: 'Define whether a product should be linkable. NOTE: this will replace the type "linked"',
    type: 'boolean',
    default: false
  },
  metadata: {
    anyOf: [
      {
        type: 'object'
      },
      {
        type: 'null'
      }
    ]
  },
  audiences: {
    anyOf: [
      {
        type: 'array'
      },
      {
        type: 'null'
      }
    ]
  },
  keywords: {
    anyOf: [
      {
        type: 'array'
      },
      {
        type: 'null'
      }
    ]
  },
  categories: {
    anyOf: [
      {
        type: 'array'
      },
      {
        type: 'null'
      }
    ]
  },
  custom_ids: {
    description: 'DEPRECATED',
    anyOf: [
      {
        type: 'object'
      },
      {
        type: 'null'
      }
    ]
  },
  related_to: {
    anyOf: [
      {
        type: 'array'
      },
      {
        type: 'null'
      }
    ]
  },
  similar_to: {
    anyOf: [
      {
        type: 'array'
      },
      {
        type: 'null'
      }
    ]
  },
  released_at: {
    anyOf: [
      {
        type: 'string',
        format: 'date-time'
      },
      {
        type: 'null'
      }
    ]
  },
  purchased_at: {
    anyOf: [
      {
        type: 'string',
        format: 'date-time'
      },
      {
        type: 'null'
      }
    ]
  },
  produced_at: {
    anyOf: [
      {
        type: 'string',
        format: 'date-time'
      },
      {
        type: 'null'
      }
    ]
  },
  custom_id: {
    anyOf: [
      {
        type: 'string'
      },
      {
        type: 'null'
      }
    ]
  },
  tax: {
    // NOTE: due to migration path, make sure clients always write this value with actual uuid. Nullability is reserved for future refactoring
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
  taxes_options: {
    anyOf: [
      {
        type: 'array'
      },
      {
        type: 'object'
      },
      {
        type: 'null'
      }
    ]
  },
  season: {
    anyOf: [
      {
        type: 'string'
      },
      {
        type: 'null'
      }
    ]
  },
  seasons: {
    anyOf: [
      {
        type: 'object'
      },
      {
        type: 'null'
      }
    ]
  },
  account: {
    // NOTE: due to migration path, make sure clients always write this value with actual uuid. Nullability is reserved for future refactoring
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
  vat_class: {
    anyOf: [
      {
        type: 'string'
      },
      {
        type: 'null'
      }
    ]
  },
  category: {
    anyOf: [
      {
        type: 'string'
      },
      {
        type: 'null'
      }
    ]
  },
  brand: {
    anyOf: [
      {
        type: 'string'
      },
      {
        type: 'null'
      }
    ]
  },
  active: {
    type: 'boolean'
  },
  deleted: {
    type: 'boolean'
  },
  type: {
    type: 'string',
    description: 'variant is a child of variant_product, and has a parent property containing the ID of a variant_product typed parent product',
    'enum': [
      'product', // standard product
      'voucher',
      'linked', // deprecated
      'linked_product', // parent
      'variant', // child
      'variant_product' // parent
    ]
  },
  manufacturer: oneOf({
    type: 'object',
    properties: {
      'iln': oneOf({
        type: 'string'
      }, { default: '' })
    }
  }),
  supplier: oneOf({
    type: 'object',
    properties: {
      'sku': oneOf({
        type: 'string'
      }, { default: '' })
    }
  }),
  locations: oneOf({
    type: 'array',
    items: {
      type: 'string',
      format: 'uuid'
    }
  }),
  condition: {
    anyOf: [
      {
        type: 'string'
      },
      {
        type: 'null'
      }
    ]
  },
  images: {
    oneOf: [
      {
        type: 'object',
        additionalProperties: false,
        properties: {
          'original': oneOf({
            type: 'string',
            format: 'uri'
          }, { default: null }),
          '1x': oneOf({
            type: 'string',
            format: 'uri'
          }, { default: null }),
          '2x': oneOf({
            type: 'string',
            format: 'uri'
          }, { default: null }),
          '3x': oneOf({
            type: 'string',
            format: 'uri'
          }, { default: null }),
          lia_1x: oneOf({
            type: 'string',
            format: 'uri'
          }, { default: null }),
          lia_2x: oneOf({
            type: 'string',
            format: 'uri'
          }, { default: null }),
          lia_3x: oneOf({
            type: 'string',
            format: 'uri'
          }, { default: null }),
          square_1x: oneOf({
            type: 'string',
            format: 'uri'
          }, { default: null }),
          square_2x: oneOf({
            type: 'string',
            format: 'uri'
          }, { default: null }),
          square_3x: oneOf({
            type: 'string',
            format: 'uri'
          }, { default: null }),
          avatar: {
            type: 'string',
            format: 'uri'
          }
        }
      },
      {
        type: 'null'
      }
    ]
  },
  insert_id: {
    type: 'integer'
  },
  product_group: {
    anyOf: [
      {
        type: 'string'
      },
      {
        type: 'null'
      }
    ]
  },
  delegated_to: {
    anyOf: [
      {
        type: 'array',
        minItems: 1,
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
  client_id: {
    description: 'A client definable ID for the purpose of syncing to a client or used in analytics for e.g. transactions that created a product offline and done transactions offline before they received a backend ID.',
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
  default_tile_color: {
    description: 'Color to be displayed when no image is set.',
    oneOf: [
      {
        type: 'string',
        maxLength: 10
      },
      {
        type: 'null'
      }
    ]
  },
  codes: require('./codes'),
  stock_mode: oneOf({
    type: 'string',
    description: 'determines if stock configurations are handled on global client level or on individual product level',
    'enum': [
      'simple',
      'complex'
    ]
  }),
  stock_configuration_location: oneOf(stockConfigurationLocation),
  is_service: {
    type: 'boolean'
  },
  service_questions: oneOf({
    type: 'array',
    description: 'An array of uuids of the products service questions',
    items: {
      type: 'string',
      format: 'uuid'
    }
  }),
  service_question_groups: oneOf({
    type: 'array',
    description: 'An array of uuids of the products service question groups',
    items: {
      type: 'string',
      format: 'uuid'
    }
  }),
  configuration: require('./properties/configuration'),
  loyalty_values: oneOf({
    type: 'array',
    description: 'The amount of loyalty values that a customer receives per product. They will be used then the loyalty system specifies "lookup" as a base in the value configurations. The unit is also determined in the loyalty system configurations.',
    minItems: 1,
    items: {
      type: 'object',
      additionalProperties: false,
      required: [
        'unit',
        'amount'
      ],
      properties: {
        unit: {
          type: 'string',
          minLength: 1,
          maxLength: 64,
          examples: [
            'miles',
            'points',
            'EUR',
            'USD'
          ]
        },
        amount: {
          type: 'number',
          minimum: 0,
          maximum: 1000000,
          multipleOf: 0.01
        }
      }
    }
  })
}
