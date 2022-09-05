module.exports = {
  name: {
    type: 'string',
    maxLength: 64
  },
  scopes: {
    anyOf: [
      {
        type: 'array',
        uniqueItems: true,
        items: {
          // we are loosely validation the permissions, as they have been removed for a while
          // and it is unclear which consumers added invlalid ones.
          anyOf: [
            {
              type: 'string',
              enum: require('../../common/permissions').staff.items.enum
            },
            {
              type: 'string'
            }
          ]
        }
      },
      {
        type: 'null'
      }
    ]
  },
  active: {
    type: 'boolean',
    default: true
  },
  deleted: {
    type: 'boolean',
    default: false
  }
}
