const baseObject = require('../../common/base')
const commonResponse = require('../../common/response')

module.exports.one = {
  response: {
    $id: 'https://schemas.tillhub.com/v0/location.read.one.response.schema.json',
    $schema: 'http://json-schema.org/draft-07/schema#',
    additionalProperties: false,
    ...commonResponse({
      resultItems: {
        type: 'object',
        additionalProperties: false,
        properties: {
          ...baseObject(),
          name: {
            description: 'Name of the branch, warehouse or warehouse shelf',
            type: 'string'
          },
          type: {
            description: 'Type of the location',
            type: 'string',
            enum: ['branch', 'warehouse', 'warehouse_shelf']
          }
        }
      }
    })
  }
}
