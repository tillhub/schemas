const base = require('./base')

module.exports = {
  type: 'object',
  additionalProperties: false,
  properties: {
    id: {
      type: 'string',
      format: 'uuid',
      description: 'The export reference ID.'
    },
    created_at: {
      type: 'string',
      format: 'date-time',
      example: '2021-06-09T07:12:32.075Z',
      description: 'The server creation time of this export.'
    },
    updated_at: {
      type: 'string',
      format: 'date-time',
      example: '2021-06-09T07:19:08.036Z',
      description: 'The server update time of this export.'
    },
    ...base
  }
}
