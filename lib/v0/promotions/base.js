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
      } })
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
    type: 'boolean'
  },
  active: {
    type: 'boolean'
  }
}
