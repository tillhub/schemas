const { oneOf } = require('../../helpers/payload-or-null')
const locationType = require('../../common/location_type')
const defaultResponse = require('./default-response')

module.exports.request = {
  $id: 'https://schemas.tillhub.com/v0/stock.transfer.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  type: 'object',
  required: [
    'qty',
    'product',
    'from',
    'to'
  ],
  properties: {
    qty: {
      type: 'number'
    },
    product: {
      type: 'string',
      format: 'uuid'
    },
    from: {
      type: 'object',
      additionalProperties: false,
      properties: {
        id: {
          type: 'string',
          description: 'Alphanumeric uuid of the location, e.g. branch uuid or warehouse uuid',
          format: 'uuid'
        },
        location_type: locationType
      },
      required: [
        'id'
      ]
    },
    to: {
      type: 'object',
      additionalProperties: false,
      properties: {
        id: {
          type: 'string',
          description: 'Alphanumeric uuid of the location, e.g. branch uuid or warehouse uuid',
          format: 'uuid'
        },
        location_type: locationType
      },
      required: [
        'id'
      ]
    },
    reasons: oneOf({
      description: 'Deprecated property. Use reason instead.',
      type: 'string',
      format: 'uuid'
    }),
    reason: oneOf({
      type: 'string',
      format: 'uuid'
    }),
    comments: oneOf({
      type: 'string',
      minLength: 1,
      maxLength: 2048
    })
  }
}

module.exports.response = {
  $id: 'https://schemas.tillhub.com/v0/stock.transfer.response.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  type: 'object',
  required: [
    'id'
  ],
  properties: defaultResponse
}
