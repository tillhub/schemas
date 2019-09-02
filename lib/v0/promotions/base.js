const { oneOf } = require('../../helpers/payload-or-null')

module.exports = {
  payload: {
    description: 'Javascript function text',
    ...oneOf([{
      type: 'string',
      minLength: 1,
      maxLength: 128
    }])
  },
  type: {
    description: 'The type of the promotion function',
    type: 'string',
    enum: [
      'cart_map_function'
    ]
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
