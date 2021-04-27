module.exports = {
  name: {
    type: 'string',
    minLength: 1,
    maxLength: 64
  },
  description: {
    oneOf: [
      {
        type: 'null'
      },
      {
        type: 'string',
        minLength: 1,
        maxLength: 16384
      }
    ]
  },
  type: {
    type: 'string',
    enum: [
      'online'
    ]
  },
  external_system_type: {
    type: 'string',
    enum: [
      // online
      'tillhub_shop', // Tillhub whitelabel of ecwid
      'localsearch_shop', // Localsearch whitelabel of ecwid
      'ecwid', // Ecwid stores
      'shopify'
    ]
  },
  resource_syncs_outbound: {
    type: 'array',
    items: {
      type: 'string',
      enum: [
        'customers',
        'products',
        'categories',
        'transactions',
        'orders'
      ]
    }
  },
  resource_syncs_inbound: {
    type: 'array',
    items: {
      type: 'string',
      enum: [
        'customers',
        'products',
        'categories',
        'transactions',
        'orders'
      ]
    }
  },
  link: {
    oneOf: [
      {
        type: 'null'
      },
      {
        type: 'string',
        maxLength: 512
      }
    ]
  },
  external_reference_id: {
    oneOf: [
      {
        type: 'null'
      },
      {
        type: 'string',
        maxLength: 512
      }
    ]
  },
  external_api_base: {
    oneOf: [
      {
        type: 'null'
      },
      {
        type: 'string',
        maxLength: 512
      }
    ]
  },
  auth: {
    oneOf: [
      {
        type: 'null'
      },
      {
        type: 'object',
        additionalProperties: false,
        required: [
          'type'
        ],
        properties: {
          type: {
            type: 'string',
            enum: [
              'basic',
              'token',
              'bearer_token'
            ]
          },
          token: {
            type: 'string'
          },
          user: {
            type: 'string'
          },
          password: {
            type: 'string',
            maxLength: 128,
            minLength: 1
          }
        },
        if: { properties: { external_system_type: { enum: ['ecwid'] } } },
        then: {
          required: [
            'password',
            'user'
          ]
        }
      }
    ]
  },
  default_category_tree: {
    oneOf: [
      {
        type: 'null'
      },
      {
        type: 'string',
        format: 'uuid',
        example: '936835f7-2d75-41d2-9001-38ed6e458328'
      }
    ]
  },
  default_location: {
    oneOf: [
      {
        type: 'null'
      },
      {
        type: 'string',
        example: '936835f7-2d75-41d2-9001-38ed6e458328'
      }
    ]
  },
  active: {
    description: 'Soft disable or enable this storefronts.',
    type: 'boolean',
    default: true
  },
  deleted: {
    description: 'Soft delete this storefronts.',
    type: 'boolean',
    default: false
  },
  metadata: {
    oneOf: [
      {
        type: 'null'
      },
      {
        type: 'object'
      }
    ]
  },
  profile: {
    oneOf: [
      {
        type: 'null'
      },
      {
        type: 'object',
        additionalProperties: false,
        properties: {
          currency: {
            description: 'The three letter [ISO currency](https://en.wikipedia.org/wiki/ISO_4217) of this storefront.',
            type: 'string',
            default: 'EUR'
          },
          language: {
            description: 'The code representation of the language (https://en.wikipedia.org/wiki/ISO_639-1) of this storefront.',
            type: 'string',
            default: 'de'
          },
          tax: {
            description: 'Tax value in %.',
            type: 'number',
            default: 19
          }
        }
      }
    ]
  },
  auto_sync: {
    description: `Sets wether the storefront's resources should be automatically sync.`,
    type: 'boolean',
    default: false
  },
  whitelisted: {
    description: `Sets wether the storefront's products are whitelisted.`,
    type: 'boolean',
    default: false
  }
}
