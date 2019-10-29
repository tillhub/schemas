const base = require('./base')

module.exports = {
  type: 'object',
  additionalProperties: false,
  required: [],
  properties: {
    id: {
      type: 'string',
      format: 'uuid',
      description: 'The item resource reference ID.'
    },
    transaction: {
      type: 'string',
      format: 'uuid',
      description: 'The transaction resource reference ID.'
    },
    created_at: {
      type: 'string',
      format: 'date-time',
      example: '2018-11-04T23:18:43.075Z',
      description: 'The server creation time of this transaction.'
    },
    ...base,
    insert_id: {
      type: 'number',
      example: '128',
      description: 'The sequential database insert ID. Consecutiveness is not guaranteed.'
    },
    client_account: {
      type: 'string',
      minLength: 32,
      maxLength: 36,
      example: '061f91a3-eba2-40b8-9a76-115189d6741e',
      description: 'The Tillhub client account ID. Note: this will usually be a uuid v4, however you might receive a capitalised dash-stripped version of it, if you hold a legsacy account.'
    }
  }
}
