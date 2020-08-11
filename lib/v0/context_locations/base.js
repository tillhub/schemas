module.exports = {
  name: {
    type: 'string',
    maxLength: 64
  },
  locations: {
    oneOf: [
      {
        type: 'array',
        items: {
          type: 'string'
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
          type: 'string'
        }
      },
      {
        type: 'null'
      }
    ]
  },
  active: {
    description: 'Soft disable or enabled this branch group.',
    type: 'boolean',
    default: true
  },
  deleted: {
    description: 'Soft delete this branch group.',
    type: 'boolean',
    default: false
  },
  anyOf: [
    { required: ['locations'] },
    { required: ['branch_groups'] }
  ]
}
