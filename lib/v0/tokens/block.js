module.exports.request = {
  $id: 'https://schemas.tillhub.com/v0/tokens.update.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  type: 'object',
  required: [],
  properties: {
    block_reason: {
      oneOf: [
        {
          type: 'string'
        },
        {
          type: 'null'
        }
      ]
    },
    block_origin: {
      oneOf: [
        {
          type: 'object'
        },
        {
          type: 'null'
        }
      ]
    }
  }
}
