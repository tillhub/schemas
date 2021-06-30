const base = require('./base')

module.exports = {
  type: 'object',
  additionalProperties: false,
  required: [],
  properties: {
    ...base,
    id: {
      type: 'string',
      format: 'uuid',
      description: 'The resource reference ID for this state.'
    },
    created_at: {
      type: 'string',
      format: 'date-time',
      example: '2018-11-04T23:18:43.075Z',
      description: 'The server creation time of this state.'
    },
    updated_at: {
      type: 'string',
      format: 'date-time',
      example: '2018-11-04T23:18:43.075Z',
      description: 'The server update time of this state.'
    }
  }
}
