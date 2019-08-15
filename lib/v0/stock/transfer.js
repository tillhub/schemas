
module.exports.request = {
  $id: 'https://schemas.tillhub.com/v0/stock.transfer.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  type: 'object',
  required: [
    'qty',
    'product',
    'from',
    'to'
  ],
  properties: {
    qty: {
      type: 'number'
    },
    product: {
      type: 'string',
      format: 'uuid'
    },
    from: {
      type: 'object',
      additionalProperties: false,
      properties: {
        id: {
          type: 'string',
          description: 'Alphanumeric uuid of the location, e.g. branch uuid or warehouse uuid',
          format: 'uuid'
        },
        location_type: {
          type: 'string',
          'enum': [
            'client',
            'branch',
            'warehouse',
            'warehouse_shelf'
          ]
        }
      },
      required: [
        'id'
      ]
    },
    to: {
      type: 'object',
      additionalProperties: false,
      properties: {
        id: {
          type: 'string',
          description: 'Alphanumeric uuid of the location, e.g. branch uuid or warehouse uuid',
          format: 'uuid'
        },
        location_type: {
          type: 'string',
          'enum': [
            'branch',
            'warehouse',
            'warehouse_shelf'
          ]
        }
      },
      required: [
        'id'
      ]
    },
    reasons: {
      type: 'string',
      format: 'uuid'
    }
  }
}
