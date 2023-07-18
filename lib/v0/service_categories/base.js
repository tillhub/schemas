module.exports = {
  type: 'object',
  additionalProperties: false,
  properties: {
    name: {
      description: 'The name of the service category',
      type: 'string',
      example: 'Haircuts'
    },
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
  }
}
