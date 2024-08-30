const { oneOf } = require('../../../helpers/payload-or-null')
const productImages = require('./images')

module.exports = oneOf({
  description: 'Only valid for variant parent products',
  type: 'array',
  items: {
    type: 'object',
    properties: {
      id: {
        description: 'Product ressource for full child product',
        type: 'string',
        format: 'uuid'
      },
      name: oneOf({
        description: 'Name of the child product',
        type: 'string',
        example: 'Shirt S rot'
      }),
      custom_id: oneOf({
        description: 'Product number of the child product',
        type: 'string',
        example: 'P0000001046TEST280824-1'
      }),
      attributes: oneOf({
        type: 'object',
        description: 'A dictionary <string, string> describing all values for the specific child',
        additionalProperties: false,
        maxProperties: 512,
        patternProperties: {
          '^.{1,256}$': { type: 'string' }
        }
      }),
      images: productImages,
      barcodes: oneOf({
        description: 'Product barcodes',
        type: 'array',
        items: {
          type: 'string',
          maxLength: 1024,
          example: 'ABC-abc-1234'
        }
      })
    }
  }
})
