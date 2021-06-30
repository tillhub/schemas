const base = require('./base')

module.exports = {
  type: 'object',
  additionalProperties: false,
  properties: base,
  required: [
    'id',
    'client_id',
    'register',
    'rooms'
  ]
}
