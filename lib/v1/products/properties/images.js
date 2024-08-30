const { oneOf } = require('../../../helpers/payload-or-null')

module.exports = oneOf({
  type: 'object',
  additionalProperties: false,
  properties: {
    'original': oneOf({
      type: 'string',
      format: 'uri'
    }, { default: null }),
    '1x': oneOf({
      type: 'string',
      format: 'uri'
    }, { default: null }),
    '2x': oneOf({
      type: 'string',
      format: 'uri'
    }, { default: null }),
    '3x': oneOf({
      type: 'string',
      format: 'uri'
    }, { default: null }),
    lia_1x: oneOf({
      type: 'string',
      format: 'uri'
    }, { default: null }),
    lia_2x: oneOf({
      type: 'string',
      format: 'uri'
    }, { default: null }),
    lia_3x: oneOf({
      type: 'string',
      format: 'uri'
    }, { default: null }),
    square_1x: oneOf({
      type: 'string',
      format: 'uri'
    }, { default: null }),
    square_2x: oneOf({
      type: 'string',
      format: 'uri'
    }, { default: null }),
    square_3x: oneOf({
      type: 'string',
      format: 'uri'
    }, { default: null }),
    avatar: {
      type: 'string',
      format: 'uri'
    }
  }
})
