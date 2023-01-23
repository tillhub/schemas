const clientBase = require('./client_base_fields')

module.exports = {
  type: 'object',
  additionalProperties: false,
  properties: {
    id: {
      type: 'string',
      example: '860defb8-5598-421d-9da4-f0826e767536',
      format: 'uuid',
      description: 'The uuid v4 that is generated on the API when a transaction is received. This id can be used for idempotency'
    },
    ...clientBase
  },
  anyOf: [
    {
      not: {
        // if 'type' is 'default' 'time' should be NULL - which is not enforced by this schema
        properties: { 'type': { const: 'default' } },
        required: ['type']
      }
    },
    {
      // if 'type' is not 'default' 'time' is required
      required: ['time']
    }
  ]
}
