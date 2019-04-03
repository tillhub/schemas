const item = {
  type: 'object',
  properties: {
    type: {
      type: 'string',
      enum: ['product', 'discount', 'voucher_action', 'custom_function']
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
    },
    function_payload: {
      oneOf: [
        { type: 'object' },
        { type: 'null' }
      ]
    }
  },
  required: [
    'type',
    'client_id',
    'object_id',
    'order_index',
    'function_payload'
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
      type: 'array',
      items: {
        type: 'string',
        format: 'uuid'
      },
      default: []
    },
    branches: {
      type: 'array',
      items: {
        type: 'string',
        format: 'uuid'
      },
      default: []
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
    deleted: {
      type: 'boolean',
      default: false
    },
    active: {
      type: 'boolean',
      default: true
    }
  }
}

module.exports = favourite.properties
