module.exports = {
  oneOf: [
    {
      type: 'null'
    },
    {
      type: 'object',
      additionalProperties: false,
      properties: {
        country: {
          type: 'string',
          minLength: 1,
          maxLength: 10
        },
        franchise_id: {
          type: 'string',
          minLength: 1,
          maxLength: 10
        }
      }
    }
  ]
}
