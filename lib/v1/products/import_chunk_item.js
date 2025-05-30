const { oneOf } = require('../../helpers/payload-or-null')
const { grossPriceCondition } = require('./common/price_condition')

const base = require('./base').request

const productImportChunkItem = {
  type: 'object',
  additionalProperties: false,
  required: [
    'id',
    'name',
    'account',
    'tax',
    'type'
  ],
  properties: {
    ...base,
    id: {
      type: 'string',
      format: 'uuid'
    },
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
