const { oneOf } = require('../../helpers/payload-or-null')
const customProperties = require('../../common/custom_properties')

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
      }),
      location_type: {
        anyOf: [
          {
            type: 'string',
            description: 'Type of stock to be created (supported only for bulk creation of products with stock)',
            enum: [
              'client',
              'branch',
              'warehouse',
              'warehouse_shelf'
            ]
          },
          {
            type: 'null'
          }
        ]
      },
      qty: oneOf({
        description: 'The amount/quantity of stock to be created (supported only for bulk creation of products with stock)',
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
  prices: require('./common/prices'),
  barcodes: {
    description: 'Product barcodes',
    anyOf: [
      {
        type: 'array',
        items: {
          type: 'string',
          maxLength: 1024,
          example: 'ABC-abc-1234'
        }
      },
      {
        type: 'null'
      }
    ]
  },
  barcode: {
    description: "Deprecated, use 'barcodes' instead",
    deprecated: true,
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
  sellable: {
    description: 'Define whether a product should be sellable (appears in use cases which assume sale)',
    type: 'boolean',
    default: true
  },
  purchasable: {
    description: 'Define whether a product should be purchasable (appears in use cases which assume purchase)',
    type: 'boolean',
    default: true
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
    description: 'Defines a list of Tillhub categories, which is list of uuids. The category trees will then determine where it is placed.',
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
    description: 'The product number',
    anyOf: [
      {
        type: 'string',
        example: '0000000028-000008'
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
    description: 'variant of a product (product|voucher) or a parent (variant_product|linked_product|composed_product) or a child (variant|linked) where child has "parent" property containing the ID of a parent product',
    'enum': [
      'product', // standard product
      'composed_product', // composed product
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
  }),
  manufacturers: oneOf({
    type: 'array',
    description: 'An array of uuids of the product manufacturers',
    items: {
      type: 'string',
      format: 'uuid'
    }
  },
  {
    type: 'null'
  }),
  components: {
    description: 'An array of components for composed product (the type is "composed_product")',
    type: 'array',
    items: {
      type: 'object',
      additionalProperties: false,
      required: ['product', 'quantity'],
      properties: {
        product: {
          description: 'Linked product UUID which is a component of composed product',
          type: 'string',
          format: 'uuid'
        },
        quantity: {
          description: 'The quantity of component in a composed product',
          type: 'number',
          minimum: 0
        }
      }
    }
  },
  delegatable: {
    description: 'Define whether the product can be delegated to other users at all.',
    oneOf: [
      {
        type: 'boolean'
      },
      {
        type: 'null'
      }
    ]
  },
  online: {
    description: 'Define whether this product and it\'s children (if not specified otherwise) are available online.',
    default: false,
    oneOf: [
      {
        type: 'boolean'
      },
      {
        type: 'null'
      }
    ]
  },
  serial_number_input_required: {
    description: 'Define whether a product requires to enter a serial number during the sale',
    type: 'boolean',
    default: false
  },
  shipping_required: {
    description: 'Define whether this item requires shipping. This usually the case except for digital goods. Tax and tax splits may apply based on region.',
    default: true,
    oneOf: [
      {
        type: 'boolean'
      },
      {
        type: 'null'
      }
    ]
  },
  delegatable_to: oneOf({
    type: 'array',
    description: 'List of other (sub)users that are allowed to read this product. If it is "null" then the product can be read by any of the validated (sub)users.',
    items: {
      type: 'object',
      additionalProperties: false,
      required: ['type', 'value'],
      properties: {
        type: {
          type: 'string',
          description: 'Type of the user, that indicates in which table to look up',
          enum: [
            'client_account'
          ]
        },
        value: {
          type: 'string',
          description: 'Alphanumeric uuid of the user',
          format: 'uuid'
        }
      }
    }
  }),
  delegated_from: oneOf({
    type: 'object',
    description: 'When the product was cloned from another account\'s product, the origin/owner should be listed here.',
    additionalProperties: false,
    required: ['owner', 'product'],
    properties: {
      owner: {
        type: 'object',
        additionalProperties: false,
        required: ['type', 'value'],
        properties: {
          type: {
            type: 'string',
            description: 'Type of the user from whom the product was cloned',
            enum: [
              'client_account'
            ]
          },
          value: {
            type: 'string',
            description: 'Alphanumeric uuid of the user from whom the product was cloned',
            format: 'uuid'
          }
        }
      },
      product: {
        type: 'string',
        description: 'Alphanumeric uuid of the original product from whom it was cloned',
        format: 'uuid'
      }
    }
  }),
  warranty_notice: {
    description: 'Warranty notice for the customer',
    ...oneOf({
      type: 'string',
      maxLength: 16384
    })
  },
  refund_policy: {
    description: 'Refund policy for the customer',
    ...oneOf({
      type: 'string',
      maxLength: 16384
    })
  },
  disclaimer: {
    description: 'Any disclaimer for the customer',
    ...oneOf({
      type: 'string',
      maxLength: 16384
    })
  },
  policy: {
    description: 'ACL / permissions for this product',
    ...oneOf({
      type: 'object',
      additionalProperties: false,
      required: [
        'v0',
        'statements'
      ],
      properties: {
        version: {
          type: 'string',
          enum: [
            'v0'
          ]
        },
        statements: {
          type: 'array',
          items: {
            type: 'object',
            additionalProperties: false,
            required: [
              'effect'
            ],
            properties: {
              effect: {
                type: 'string',
                enum: [
                  'allow',
                  'deny'
                ]
              },
              resource_type: {
                type: 'string',
                enum: [
                  'register',
                  'branch',
                  'branch_group',
                  'location',
                  'client_account',
                  'client',
                  'staff',
                  'user'
                ]
              },
              resource: {
                type: 'string',
                // include legacy IDs
                maxLength: 64,
                minLength: 16
              }
            }
          }
        }
      }
    })
  },
  external_ids: oneOf({
    description: 'The product IDs given by external systems, e.g. Ecwid.',
    type: 'array',
    items: {
      type: 'object',
      properties: {
        store_front: {
          description: 'uuid of the Tillhub storeFront',
          type: 'string',
          format: 'uuid'
        },
        product_id: {
          description: 'the product ID given by external system, e.g. Ecwid',
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'number'
            }
          ]
        }
      }
    }
  }),
  custom_properties: {
    ...customProperties.implementation
  }
}
