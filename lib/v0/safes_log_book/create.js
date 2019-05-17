const base = require('./base')

module.exports.request = {
  $id: 'https://schemas.tillhub.com/v0/safes_log_book.create.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  type: 'array',
  items: {
    type: 'object',
    required: [
      'initiated_at',
      'issuer',
      'from',
      'to',
      'transfer_value',
      'currency'
    ],
    properties: base
  }
}
