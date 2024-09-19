
const { oneOf } = require('../../helpers/payload-or-null')
const locationType = require('../../common/location_type')
const defaultResponse = require('./default-response')

module.exports.request = {
  $id: 'https://schemas.tillhub.com/v0/stock.update.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  type: 'object',
  required: [
    'qty',
    'location'
  ],
  properties: {
    qty: {
      anyOf: [
        {
          type: 'null'
        },
        {
          type: 'number'
        }
      ]
    },
    status: {
      type: 'string',
      'enum': [
        'available',
        'sold',
        'purchased',
        'reserved',
        'transit_outgoing',
        'transit_incoming',
        'delivered',
        'selected'
      ]
    },
    metadata: oneOf({
      type: 'object'
    }),
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
    }),
    location: {
      description: 'Alphanumeric uuid of the location, e.g. branch uuid or warehouse uuid',
      type: 'string',
      format: 'uuid'
    }
  }
}

module.exports.response = {
  $id: 'https://schemas.tillhub.com/v0/stock.update.response.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  type: 'object',
  required: [
    'id',
    'qty_change'
  ],
  properties: {
    ...defaultResponse,
    qty_change: {
      type: 'number'
    },
    channel: oneOf({
      type: 'string',
      example: 'api'
    }),
    purchase: oneOf({
      type: 'object'
    }),
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
    }),
    from: oneOf({
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
    }),
    to: oneOf({
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
    })
  }
}
