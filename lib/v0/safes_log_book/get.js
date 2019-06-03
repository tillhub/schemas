const defaultResponse = require('./default-response')

module.exports.response = {
  $id: 'https://schemas.tillhub.com/v0/safes_log_book.get.response.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'array',
  items: {
    type: 'object',
    additionalProperties: false,
    required: [
      'id'
    ],
    properties: defaultResponse
  }
}
