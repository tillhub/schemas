const baseObject = require('../../common/base')
const commonResponse = require('../../common/response')
const { getEvent } = require('../../common/webhooks')

const base = require('./base')
const baseExtended = require('./baseExt')

module.exports = {
  request: {
    $id: 'https://schemas.tillhub.com/v0/customers.create.request.schema.json',
    $schema: 'http://json-schema.org/draft-07/schema#',
    additionalProperties: false,
    type: 'object',
    properties: base
  },
  response: {
    $id: 'https://schemas.tillhub.com/v0/customers.create.response.schema.json',
    $schema: 'http://json-schema.org/draft-07/schema#',
    additionalProperties: false,
    ...commonResponse({
      resultItems: {
        type: 'object',
        additionalProperties: false,
        properties: {
          ...baseObject(),
          ...base
        }
      }
    })
  },
  event: {
    $id: 'https://schemas.tillhub.com/v0/customers.create.event.schema.json',
    $schema: 'http://json-schema.org/draft-07/schema#',
    ...getEvent({
      type: 'object',
      additionalProperties: false,
      properties: {
        ...baseObject(),
        ...base,
        ...baseExtended
      }
    }, { eventEntityExample: 'customer' })
  }
}
