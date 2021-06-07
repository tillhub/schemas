const base = require('./base')
const commonResponse = require('../../common/response')

module.exports.all = {
  query: {
    $id: 'https://schemas.tillhub.com/v0/french-cert.reprints.get.all.query.schema.json',
    $schema: 'http://json-schema.org/draft-07/schema#',
    description: 'A query to request a list of stored entries of reprinted documents generated out of transaction data',
    additionalProperties: false,
    type: 'object',
    required: [],
    properties: {}
  },
  response: {
    $id: 'https://schemas.tillhub.com/v0/french-cert.reprints.get.all.response.schema.json',
    $schema: 'http://json-schema.org/draft-07/schema#',
    description: 'A list of entries of reprinted documents generated out of transaction data',
    ...commonResponse({ resultItems: {
      additionalProperties: false,
      type: 'object',
      properties: base
    } })
  }
}
