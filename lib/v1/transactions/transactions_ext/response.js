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
      description: 'The item resource reference ID.'
    },
    created_at: {
      type: 'string',
      format: 'date-time',
      example: '2018-11-04T23:18:43.075Z',
      description: 'The server creation time of this item.'
    }
  }
}
