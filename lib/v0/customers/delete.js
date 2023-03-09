const baseObject = require('../../common/base')
const { getEvent } = require('../../common/webhooks')

const base = require('./base')
const baseExtended = require('./baseExt')

module.exports = {
  event: {
    $id: 'https://schemas.tillhub.com/v0/customers.delete.event.schema.json',
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
