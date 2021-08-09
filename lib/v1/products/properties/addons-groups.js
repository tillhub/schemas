const pick = require('just-pick')
const { oneOf } = require('../../../helpers/payload-or-null')

const baseProperties = require('../../../v0/product_addon_groups/base')

module.exports.flat = oneOf({
  type: 'array',
  description: 'An array of uuids of the product addon groups',
  items: {
    type: 'string',
    format: 'uuid',
    example: '66c3a88d-1825-4eb6-a1ad-1691140cf140'
  }
})

module.exports.full = oneOf({
  type: 'array',
  description: 'An array of the product addon groups',
  items: {
    type: 'object',
    additionalProperties: false,
    properties: pick(baseProperties, ['id', 'name'])
  }
})
