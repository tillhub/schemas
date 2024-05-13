const { oneOf } = require('../../helpers/payload-or-null')

module.exports = {
  name: {
    ...oneOf([{
      type: 'string',
      minLength: 1,
      maxLength: 255
    }])
  },
  description: {
    ...oneOf([{
      type: 'string',
      minLength: 1,
      maxLength: 1024
    }])
  },
  payload: {
    description: 'Javascript function text',
    type: 'string',
    minLength: 1,
    maxLength: 65536
  },
  type: {
    description: 'The type of the promotion function',
    type: 'string',
    enum: [
      'cart_map_function'
    ]
  },
  metadata: {
    ...oneOf({
      type: 'object'
    })
  },
  arguments: {
    ...oneOf({
      type: 'array',
      items: {
        type: 'string'
      }
    })
  },
  locations: {
    ...oneOf({
      type: 'array',
      items: {
        type: 'string',
        format: 'uuid'
      }
    })
  },
  client_id: {
    description: 'A identifier used locally on POS for their own reference.',
    ...oneOf([{
      type: 'string',
      minLength: 1,
      maxLength: 128
    }])
  },
  deleted: {
    type: 'boolean',
    default: false
  },
  active: {
    type: 'boolean',
    default: true
  },
  template: {
    ...oneOf(require('./template'))
  },
  constraints: {
    ...oneOf(require('./constraints'))
  },
  branch_groups: {
    ...oneOf({
      type: 'array',
      items: {
        type: 'string',
        format: 'uuid'
      }
    })
  },
  version: oneOf({
    type: 'integer',
    description: 'The version number of the promotion. Version 1 is deprecated, current version is 2',
    example: 2,
    minimum: 1
  }),
  barcode: {
    description: 'The barcode used to trigger the promotion',
    example: '0E9761310XF',
    ...oneOf({
      type: 'string'
    })
  }
}
