const { oneOf } = require('../../helpers/payload-or-null')

module.exports = {
  name: {
    description: 'Any arbitrary name for a content template',
    ...oneOf({
      type: 'string',
      maxLength: 255,
      minLength: 1
    })
  },
  active: {
    description: 'Soft disable or enabled this item.',
    type: 'boolean',
    default: true
  },
  deleted: {
    description: 'Soft delete this item.',
    type: 'boolean',
    default: false
  },
  contents: {
    ...oneOf([
      {
        type: 'object',
        description: 'CFD displayable device contents',
        additionalProperties: false,
        properties: {
          idle: {
            ...oneOf({
              type: 'array',
              items: {
                type: 'string',
                format: 'uuid'
              }
            })
          },
          welcome: {
            ...oneOf({
              type: 'array',
              items: {
                type: 'string',
                format: 'uuid'
              }
            })
          },
          cart: {
            ...oneOf({
              type: 'array',
              items: {
                type: 'string',
                format: 'uuid'
              }
            })
          },
          payment: {
            ...oneOf({
              type: 'array',
              items: {
                type: 'string',
                format: 'uuid'
              }
            })
          },
          payment_terminal: {
            ...oneOf({
              type: 'array',
              items: {
                type: 'string',
                format: 'uuid'
              }
            })
          },
          payment_approved: {
            ...oneOf({
              type: 'array',
              items: {
                type: 'string',
                format: 'uuid'
              }
            })
          },
          goodbye: {
            ...oneOf({
              type: 'array',
              items: {
                type: 'string',
                format: 'uuid'
              }
            })
          },
          logo: {
            ...oneOf({
              type: 'array',
              items: {
                type: 'string',
                format: 'uuid'
              }
            })
          },
          runtime: {
            ...oneOf({
              type: 'string',
              format: 'uuid'
            })
          }
        }
      }
    ])
  }
}
