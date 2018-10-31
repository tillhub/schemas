module.exports = {
  anyOf: [
    {
      type: 'null'
    },
    {
      type: 'object',
      additionalProperties: false,
      properties: {
        type: {
          type: 'string',
          enum: [
            'inclusive',
            'exclusive'
          ]
        }
      }
    }
  ]
}
