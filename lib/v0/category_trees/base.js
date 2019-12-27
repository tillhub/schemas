
module.exports = {
  name: {
    type: 'string',
    minLength: 1,
    maxLength: 64
  },
  summary: {
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
  children: {
    description: 'This recursive category ID + children combination represents a displayable tree.',
    oneOf: [
      {
        type: 'null'
      },
      {
        '$ref': '#/definitions/children'
      }
    ]
  },
  comments: {
    oneOf: [
      {
        type: 'string',
        minLength: 1,
        maxLength: 4096
      },
      {
        type: 'null'
      }
    ]
  },
  active: {
    description: 'Soft disable or enable this category_trees.',
    type: 'boolean',
    default: true
  },
  deleted: {
    description: 'Soft delete this category_trees.',
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
