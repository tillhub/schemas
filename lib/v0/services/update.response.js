const request = require('./update.request')
const commonResponse = require('../../common/response')

const response = {
  ...request,
  required: [],
  properties: {
    id: {
      description: 'The service ID',
      type: 'string',
      format: 'uuid',
      example: '05297f58-3408-44d0-8bf4-125d4e86c08a'
    },
    ...request.properties
  }
}

module.exports = {
  $id: 'https://schemas.tillhub.com/v0/services.update.response.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  ...commonResponse({ resultItems: response })
}
