module.exports.request = {
  $id: 'https://schemas.tillhub.com/v0/trash.create.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: true,
  required: [
  ],
  properties: {
    start: {
      type: 'string',
      format: 'date-time'
    },
    end: {
      type: 'string',
      format: 'date-time'
    },
    type: {
      type: 'string',
      enum: [
        'products',
        'branches',
        'warehouses',
        'customers',
        'discounts'
      ]
    }
  },
  type: 'object'
}
