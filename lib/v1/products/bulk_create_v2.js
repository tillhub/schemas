const base = require('./base').request
const locationType = require('../../common/location_type')
const { anyOf, oneOf } = require('../../helpers/payload-or-null')

const productProperties = {
  ...base,
  business_partners: oneOf({
    type: 'array',
    items: {
      type: 'string',
      format: 'uuid'
    }
  }),
  tags: oneOf({
    type: 'array',
    items: {
      type: 'string'
    }
  }),
  stock_configuration_location: oneOf({
    type: 'object',
    required: [
      'location',
      'qty',
      'location_type'
    ],
    properties: {
      location: {
        type: 'string',
        format: 'uuid'
      },
      qty: {
        type: 'number'
      },
      location_type: anyOf(locationType)
    }
  })
}

module.exports = {
  $id: 'https://schemas.tillhub.com/v1/products.bulk_create_v2.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  type: 'object',
  required: [
    'preferUpdate',
    'products'
  ],
  properties: {
    preferUpdate: {
      type: 'boolean'
    },
    products: {
      type: 'array',
      minItems: 1,
      items: {
        type: 'object',
        required: [
          'name',
          'account',
          'tax',
          'type'
        ],
        properties: {
          ...productProperties,
          children: oneOf({
            type: 'array',
            items: {
              type: 'object',
              required: [
                'name',
                'account',
                'tax',
                'type'
              ],
              properties: productProperties
            }
          })
        }
      }
    }
  }
}
