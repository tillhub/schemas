const commonResponse = require('../../common/response')
const { resultItems } = require('./base')

module.exports = {
  request: {
    $id: 'https://schemas.tillhub.com/v1/branches.selection.request.schema.json',
    $schema: 'http://json-schema.org/draft-07/schema#',
    additionalProperties: false,
    type: 'object',
    required: ['branch_ids'],
    properties: {
      branch_ids: {
        type: 'array',
        minItems: 0,
        maxItems: 200,
        items: {
          description: 'Branch UUID',
          type: 'string',
          format: 'uuid',
          example: '936835f7-2d75-41d2-9001-38ed6e458328'
        }
      }
    }
  },
  response: {
    $id: 'https://schemas.tillhub.com/v1/branches.selection.response.schema.json',
    $schema: 'http://json-schema.org/draft-07/schema#',
    additionalProperties: false,
    ...commonResponse({
      resultItems
    })
  }
}
