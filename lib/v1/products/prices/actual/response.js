const priceBookEntryBase = require('../book/entry').base

module.exports = {
  $id: 'https://schemas.tillhub.com/v1/products.prices.actual.response.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  type: 'object',
  required: [
  ],
  properties: {
    amount_net: priceBookEntryBase.amount_net,
    amount_gross: priceBookEntryBase.amount_gross,
    rate: priceBookEntryBase.rate,
    currency: priceBookEntryBase.currency
  }
}
