const pick = require('just-pick')
const { oneOf } = require('../../helpers/payload-or-null')
const baseObject = require('../../common/base')
const { getEvent } = require('../../common/webhooks')
const baseProduct = require('../../v1/products/base').response
const baseBranch = require('../../v0/branches/base')
const baseReason = require('../../v0/reasons/base')
const baseStockBook = require('./base').simple

const eventBaseData = pick({
  ...baseObject({ entityName: 'stock book' }),
  ...baseStockBook
}, ['id', 'created_at', 'qty_change', 'type', 'channel'])

const eventOverrideData = {
  product: {
    description: 'The product which stock was affected',
    type: 'object',
    additionalProperties: false,
    properties: pick({
      ...baseObject(),
      ...baseProduct
    }, [
      'name',
      'client_id',
      'custom_id',
      'custom_properties'
    ])
  },
  location: {
    description: 'The location the stock was booked at',
    type: 'object',
    additionalProperties: false,
    properties: pick({
      ...baseObject(),
      ...baseBranch
    }, [
      'name',
      'custom_id',
      'branch_number',
      'metadata'
    ])
  },
  reason: oneOf({
    description: 'The reason of stock book',
    type: 'object',
    additionalProperties: false,
    properties: pick({
      ...baseObject(),
      ...baseReason
    }, [
      'name',
      'type'
    ])
  })
}

module.exports = {
  event: {
    $id: 'https://schemas.tillhub.com/v0/stocks-book.create.event.schema.json',
    $schema: 'http://json-schema.org/draft-07/schema#',
    ...getEvent({
      type: 'object',
      additionalProperties: false,
      required: [
        'id',
        'qty_change',
        'product',
        'location'
      ],
      properties: {
        ...eventBaseData,
        ...eventOverrideData
      }
    }, { eventEntityExample: 'stocks-book' })
  }
}
