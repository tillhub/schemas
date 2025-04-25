const { oneOf } = require('../../helpers/payload-or-null')
const { grossPriceCondition } = require('./common/price_condition')

const base = require('./base').request

const productImportChunkItem = {
  type: 'object',
  additionalProperties: false,
  required: [
    'name',
    'account',
    'tax',
    'type'
  ],
  properties: {
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
    })
  },
  allOf: [grossPriceCondition]
}

module.exports = { productImportChunkItem }
