const commonResponse = require('../../common/response')
const base = require('./base')
const response = require('./response')

module.exports = {
  request: {
    $id: 'https://schemas.tillhub.com/v0/tse_exports.create.request.schema.json',
    $schema: 'http://json-schema.org/draft-07/schema#',
    additionalProperties: false,
    required: [
      'tse_serial_number',
      'export'
    ],
    properties: base,
    type: 'object'
  },
  response: {
    $id: 'https://schemas.tillhub.com/v0/tse_exports.create.response.schema.json',
    $schema: 'http://json-schema.org/draft-07/schema#',
    ...commonResponse({ resultItems: response })
  }
}
