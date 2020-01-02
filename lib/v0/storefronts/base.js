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
      'tillhub_shop',
      'ecwid',
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
          }
        }
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
  }
}