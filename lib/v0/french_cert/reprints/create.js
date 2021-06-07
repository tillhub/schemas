const base = require('./base')
const commonResponse = require('../../../common/response')

module.exports.request = {
  $id: 'https://schemas.tillhub.com/v0/french-cert.reprints.create.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  description: 'An entry of reprinted document generated out of transaction data',
  additionalProperties: false,
  type: 'object',
  required: [
    'duplicate_id',
    'duplicate_hash',
    'duplicate_signature',
    'original_number',
    'original_type',
    'original_signature',
    'issue_date',
    'number',
    'operator_code',
    'reason',
    'software_version'
  ],
  properties: base
}

module.exports.response = {
  $id: 'https://schemas.tillhub.com/v0/french-cert.reprints.create.response.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  description: 'A stored entry of reprinted document generated out of transaction data',
  ...commonResponse({ resultItems: {
    additionalProperties: false,
    type: 'object',
    properties: base
  } })
}
