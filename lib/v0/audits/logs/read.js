const commonBase = { ...require('../../../common/base') }
const commonResponse = require('../../../common/response')
const { oneOf } = require('../../../helpers/payload-or-null')

const base = require('./base')

// Logs are read-only
delete commonBase.updated_at

module.exports.response = {
  $id: 'https://schemas.tillhub.com/v0/audits.logs.read.response.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  ...commonResponse({
    resultItems: {
      type: 'object',
      additionalProperties: false,
      properties: {
        ...commonBase,
        insert_id: oneOf({
          description: 'Sequential counter',
          type: 'integer',
          example: 16259
        }),
        ...base
      }
    }
  }, { hasCursor: true })
}
