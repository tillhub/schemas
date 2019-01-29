
module.exports.request = {
  $id: 'https://schemas.tillhub.com/v0/stock.transfer.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  type: 'object',
  required: [
    'qty'
  ],
  properties: {
    qty: {
      anyOf: [
        {
          type: 'null'
        },
        {
          type: 'number'
        }
      ]
    },
    status: {
      type: 'string',
      'enum': [
        'available',
        'sold',
        'purchased',
        'reserved',
        'transit_outgoing',
        'transit_incoming',
        'delivered',
        'selected'
      ]
    },
    metadata: {
      type: 'object'
    }
  }
}
