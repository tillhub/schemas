const baseObject = require('../../common/base')
const { getEvent } = require('../../common/webhooks')
const base = require('./base')

module.exports = {
  $id: 'https://schemas.tillhub.com/v1/products.update.event.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  ...getEvent({
    type: 'object',
    additionalProperties: false,
    properties: {
      ...baseObject(),
      ...base
    }
  }, { eventEntityExample: 'product' })
}
