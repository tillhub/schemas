const { stripIndents } = require('common-tags')
const pick = require('just-pick')
const { oneOf } = require('../../helpers/payload-or-null')
const baseObject = require('../../common/base')
const { getEvent } = require('../../common/webhooks')
const baseProduct = require('../../v1/products/base').response
const baseBranch = require('../../v0/branches/base')
const baseStockBook = require('./base').simple

/**
 * We transform all possible types into more generic ones:
 * 'transfer': 'add', 'deduct', 'goods_in', 'goods_out', 'relocation'
 * 'sale': 'sale', 'cancellation', 'refund'
 * 'delivery_note': 'delivery_note', 'delivery_note_cancellation', 'delivery_note_refund"
 */
const eventTypeEnum = ['transfer', 'sale', 'delivery_note']

const eventBaseData = pick({
  ...baseObject({ entityName: 'stock booking' }),
  ...baseStockBook,
  type: {
    ...baseStockBook.type,
    description: stripIndents`
    The type of stock booking:
    'transfer' - indicates a stock change made by the operator for the logistic purpose, positive value for goods-in and negative value for goods-out;
    'sale' - indicates a stock change triggered by a sale, positive value for a successful transaction and negative value for a refund or cancellation;
    'delivery_note' - indicates a stock change triggered by a delivery note, positive value for a successful delivery note and negative value for a refund or cancellation
    `,
    enum: eventTypeEnum
  }
}, ['id', 'created_at', 'qty_change', 'type'])

const eventOverrideData = {
  product: {
    description: 'The product which stock was affected',
    type: 'object',
    additionalProperties: false,
    properties: pick({
      ...baseObject(),
      ...baseProduct
    }, [
      'id',
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
    description: 'The reason name: the user generated text which can be specifically set when booking things out manually',
    type: 'string',
    example: 'Not arbitrary reason'
  }),
  stock_id: oneOf({
    description: 'id of stock entity',
    type: 'string',
    example: 'f0a52a37-df58-465d-9121-b8180fc95133'
  }),
  transaction_id: oneOf({
    description: 'id of transaction, if stock book is related to transaction',
    type: 'string',
    example: 'f0a52a37-df58-465d-9121-b8180fc95133'
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
        'created_at',
        'qty_change',
        'type',
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
