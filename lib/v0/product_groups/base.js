const { anyOf, oneOf } = require('../../helpers/payload-or-null')

const request = {
  type: 'object',
  additionalProperties: false,
  properties: {
    name: anyOf({
      description: 'Product group name',
      type: 'string',
      example: 'Beverages'
    }),
    product_group_id: {
      description: 'Product group ID',
      type: 'string',
      example: '1552c420-f71e-4171-8598-b346ec489769'
    },
    tax: oneOf({
      description: 'Product group tax rate reference',
      type: 'string',
      example: 'f5cf4198-ae26-463f-aa2b-014bd2fed8e5'
    }),
    active: oneOf({
      description: 'Product group is active',
      type: 'boolean'
    }),
    account: oneOf({
      description: 'Product group revenue account reference',
      type: 'string',
      example: '6ad04406-683c-4255-822a-3acd694d2ad1'
    }),
    takeaway_tax: oneOf({
      description: 'The reference to the takeaway tax rate to use it for calculation instead of the regular tax during takeaway checkout process',
      type: 'string',
      format: 'uuid',
      example: '4936a0c4-d266-4950-9c4d-03c5207ccf96'
    }),
    takeaway_account: oneOf({
      description: 'The reference to the takeaway revenue account to use it instead of the regular revenue account during takeaway checkout process',
      type: 'string',
      format: 'uuid',
      example: '921ec83d-c08b-411a-96d8-355f354d790d'
    }),
    images: anyOf({
      description: 'A Tillhub image object with URLs to display images this for this product group',
      type: 'object',
      additionalProperties: true,
      properties: {
        '1x': {
          type: 'string',
          format: 'uri'
        },
        '2x': {
          type: 'string',
          format: 'uri'
        },
        '3x': {
          type: 'string',
          format: 'uri'
        },
        avatar: {
          type: 'string',
          format: 'uri'
        },
        original: {
          type: 'string',
          format: 'uri'
        }
      }
    }),
    color: oneOf({
      description: 'Product group color',
      type: 'string',
      maxLength: 10
    })
  },
  required: [
    'name',
    'product_group_id',
    'tax',
    'account'
  ]
}

module.exports = {
  request,
  response: {
    ...request,
    required: [],
    properties: {
      id: {
        description: 'The product group ID',
        type: 'string',
        format: 'uuid',
        example: '05297f58-3408-44d0-8bf4-125d4e86c08a'
      },
      ...request.properties
    }
  }
}
