const base = require('../product_groups/base')

const request = {
  ...base.request,
  properties: {
    ...base.request.properties,
    description: {
      description: 'A description of the service category',
      type: 'string',
      example: 'Haircuts for men'
    },
    active: {
      description: 'Soft disable or enable this service category.',
      type: 'boolean',
      default: true
    },
    deleted: {
      description: 'Soft delete this service category.',
      type: 'boolean',
      default: false
    }
  },
  required: ['name']
}

module.exports = {
  request,
  response: {
    ...request,
    required: [],
    properties: {
      id: {
        description: 'The service category ID',
        type: 'string',
        format: 'uuid',
        example: '05297f58-3408-44d0-8bf4-125d4e86c08a'
      },
      ...request.properties
    }
  }
}
