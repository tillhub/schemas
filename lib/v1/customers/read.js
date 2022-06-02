const baseObject = require('../../common/base')
const commonResponse = require('../../common/response')
const base = require('../../v0/customers/base')
const baseExtended = require('../../v0/customers/baseExt')

module.exports.all = {
  response: {
    $id: 'https://schemas.tillhub.com/v1/customers.read.all.response.schema.json',
    $schema: 'http://json-schema.org/draft-07/schema#',
    additionalProperties: false,
    ...commonResponse({
      resultItems: {
        type: 'object',
        additionalProperties: false,
        properties: {
          ...baseObject(),
          ...base,
          ...baseExtended
        }
      }
    }, { cursorType: 'current-next' })
  }
}
