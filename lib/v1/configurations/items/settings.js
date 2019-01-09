module.exports = {
  oneOf: [
    {
      type: 'null'
    },
    {
      type: 'object',
      properties: {
        language: {
          type: 'string',
          minLength: 1,
          maxLength: 5
        },
        default_currency: {
          type: 'string',
          minLength: 3,
          maxLength: 3
        }
      }
    }
  ]
}
