const { oneOf } = require('../../helpers/payload-or-null')

const item = {
  type: 'object',
  properties: {
    type: {
      type: 'string',
      enum: [
        'product',
        'discount',
        'voucher_action',
        'custom_function',
        'voucher',
        'voucher_system',
        'product_group'
      ]
    },
    client_id: {
      type: 'string',
      format: 'uuid'
    },
    object_id: {
      type: 'string',
      format: 'uuid'
    },
    order_index: {
      type: 'number',
      multipleOf: 1.0,
      minimum: 1,
      maximum: 25
    }
  },
  required: [
    'type',
    'client_id',
    'object_id',
    'order_index'
  ]
}

const tab = {
  type: 'object',
  properties: {
    name: {
      oneOf: [
        { type: 'string' },
        { type: 'null' }
      ]
    },
    client_id: {
      type: 'string',
      format: 'uuid'
    },
    order_index: {
      type: 'number',
      multipleOf: 1.0,
      minimum: 0,
      maximum: 24
    },
    items: {
      type: 'array',
      items: item,
      default: []
    }
  },
  required: [
    'name',
    'client_id',
    'order_index',
    'items'
  ]
}

const favourite = {
  type: 'object',
  properties: {
    metadata: {
      type: 'object'
    },
    tabs: {
      type: 'array',
      items: tab,
      default: []
    },
    registers: {
      ...oneOf([{
        type: 'array',
        items: {
          type: 'string',
          format: 'uuid'
        }
      }], { default: [] })
    },
    branches: {
      ...oneOf([{
        type: 'array',
        items: {
          type: 'string',
          format: 'uuid'
        }
      }], { default: [] })
    },
    name: {
      type: 'string'
    },
    client_id: {
      type: 'string',
      format: 'uuid'
    },
    temporary_id: {
      oneOf: [
        { type: 'string', format: 'uuid' },
        { type: 'null' }
      ]
    },
    is_local: {
      type: 'boolean',
      default: false
    },
    deleted: {
      type: 'boolean',
      default: false
    },
    active: {
      type: 'boolean',
      default: true
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
    }
  }
}

module.exports = favourite.properties
