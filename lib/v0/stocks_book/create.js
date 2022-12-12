const pick = require('just-pick')
const { oneOf } = require('../../helpers/payload-or-null')
const baseObject = require('../../common/base')
const baseProduct = require('../../v1/products/base').response
const baseBranch = require('../../v0/branches/base')
const baseReason = require('../../v0/reasons/base')
const baseStockBook = require('./base').simple

const eventBaseData = pick(baseStockBook, ['id', 'qty_change', 'type'])

const eventEmbeddedData = {
  product: {
    type: 'object',
    additionalProperties: false,
    properties: pick({
      ...baseObject(),
      ...baseProduct
    }, [
      'id',
      'name',
      'client_id',
      'custom_id'
    ])
  },
  location: {
    type: 'object',
    additionalProperties: false,
    properties: pick({
      ...baseObject(),
      ...baseBranch
    }, [
      'id',
      'name',
      'custom_id',
      'branch_number',
      'metadata'
    ])
  },
  reason: oneOf({
    type: 'object',
    additionalProperties: false,
    properties: pick({
      ...baseObject(),
      ...baseReason
    }, [
      'id',
      'name',
      'type'
    ])
  })
}

module.exports = {
  event: {
    $id: 'https://schemas.tillhub.com/v0/stocks-book.create.event.schema.json',
    $schema: 'http://json-schema.org/draft-07/schema#',
    type: 'object',
    additionalProperties: false,
    required: [
      'id',
      'qty_change',
      'product',
      'location'
    ],
    properties: {
      ...baseObject(),
      ...eventBaseData,
      ...eventEmbeddedData
    }
  }
}
