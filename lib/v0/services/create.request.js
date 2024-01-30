const base = require('../products/create')
const { oneOf } = require('../../helpers/payload-or-null')

module.exports = {
  ...base,
  properties: {
    ...base.properties,
    name: {
      description: 'The name of the service',
      type: 'string',
      example: 'Haircut'
    },
    category: oneOf({
      description: 'The UUID of the category that the service belongs to',
      type: 'string',
      format: 'uuid',
      example: '05297f58-3408-44d0-8bf4-125d4e86c08a'
    }),
    duration: {
      description: 'the duration of the service in mintues',
      type: 'integer',
      minimum: 5,
      maximum: 1440,
      example: 30
    },
    'linked_product': {
      description: 'The UUID of the product associated with the service',
      type: 'string',
      format: 'uuid',
      example: '05297f58-3408-44d0-8bf4-125d4e86c08a'
    },
    locations: oneOf({
      description: 'list of branch UUIDs the service can be performed at',
      type: 'array',
      items: {
        type: 'string',
        format: 'uuid'
      }
    })
  },
  required: ['name', 'duration', 'linked_product'],
  $id: 'https://schemas.tillhub.com/v0/services.create.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#'
}
