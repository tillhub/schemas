const { oneOf } = require('../../../helpers/payload-or-null')

const baseProperties = require('../prices/book/entry/base')

module.exports.flat = oneOf({
  type: 'array',
  description: 'An array of uuids of price book entries',
  items: {
    type: 'string',
    format: 'uuid',
    example: '66c3a88d-1825-4eb6-a1ad-1691140cf140'
  }
})

const {
  product,
  products,
  product_groups: productGroups,
  ...adjustedProperties
} = baseProperties

module.exports.full = oneOf({
  type: 'array',
  description: 'An array of price book entries',
  items: {
    type: 'object',
    additionalProperties: false,
    properties: adjustedProperties
  }
})
