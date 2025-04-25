const { productImportChunkItem } = require('../products/import_chunk_item')

module.exports.chunks = {
  create: {
    request: {
      $id: 'https://schemas.tillhub.com/v1/imports.chunks.create.request.schema.json',
      $schema: 'http://json-schema.org/draft-07/schema#',
      additionalProperties: false,
      type: 'object',
      required: [
        'correlationId',
        'index',
        'isDone',
        'type',
        'chunk',
        'preferUpdate'
      ],
      properties: {
        correlationId: {
          type: 'string',
          format: 'uuid'
        },
        index: {
          type: 'integer'
        },
        isDone: {
          type: 'boolean'
        },
        type: {
          type: 'string',
          enum: [
            'product'
          ]
        },
        chunk: {
          type: 'array',
          items: {
            type: 'object'
          }
        },
        preferUpdate: {
          type: 'boolean'
        }
      },
      allOf: [
        {
          if: { properties: { type: { const: 'product' } }, required: ['type'] },
          then: {
            properties: {
              chunk: {
                type: 'array',
                items: productImportChunkItem
              }
            }
          }
        }
      ]
    }
  }
}
