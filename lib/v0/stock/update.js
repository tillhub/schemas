module.exports.request = {
  $id: 'https://schemas.tillhub.com/v0/stock.update.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  type: 'object',
  required: [
    'qty'
  ],
  properties: {
    qty: {
      type: 'number'
    },
    metadata: {
      type: 'object'
    },
    reason: {
      type: 'string',
      format: 'uuid'
    }
  }
}

module.exports.response = {
  $id: 'https://schemas.tillhub.com/v0/stock.update.response.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'array',
  items: {
    type: 'object',
    required: [
      'stock',
      'stock_book'
    ],
    properties: {
      stock: {
        type: 'object'
      },
      stock_book: {
        type: 'object'
      }
    }
  }
}
