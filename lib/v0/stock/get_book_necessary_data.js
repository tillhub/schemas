module.exports.request = {
  $id: 'https://schemas.tillhub.com/v0/stock.transfer.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  type: 'object',
  required: [
    'stock_quantity',
    'productId',
    'locationId'
  ],
  properties: {
    stock_quantity: {
      type: 'string',
      pattern: '^[0-9]+$',
      description: 'The quantity of stock we want to book'
    },
    productId: {
      type: 'string',
      format: 'uuid',
      description: 'The product which stock will be affected'
    },
    locationId: {
      type: 'string',
      format: 'uuid',
      description: 'The location the stock will be booked at'
    },
    reasonId: {
      type: 'string',
      format: 'uuid',
      description: 'Reason id to retrieve reason name that will be used'
    }
  }
}
