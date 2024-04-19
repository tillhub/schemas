module.exports = {
  $id: 'https://schemas.tillhub.com/v1/products.list.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  type: 'object',
  required: ['product_ids'],
  properties: {
    product_ids: {
      type: 'array',
      minItems: 1,
      maxItems: 100,
      items: {
        description: 'Product UUID',
        type: 'string',
        format: 'uuid',
        example: '05297f58-3408-44d0-8bf4-125d4e86c08a'
      }
    }
  }
}
