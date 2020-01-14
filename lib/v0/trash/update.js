module.exports.request = {
  $id: 'https://schemas.tillhub.com/v0/trash.update.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  type: 'object',
  required: [
    'type',
    'resource'
  ],
  properties: {
    type: {
      type: 'string',
      enum: [
        'products',
        'branches',
        'customers',
        'warehouses',
        'discounts'
      ]
    },
    resource: {
      type: 'string',
      format: 'uuid'
    }
  }
}
