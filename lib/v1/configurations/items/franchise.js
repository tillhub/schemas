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
          oneOf: [
            {
              type: 'string',
              minLength: 1,
              maxLength: 10
            },
            {
              type: 'null'
            }
          ]
        },
        franchise_id: {
          description: 'The custom franchise ID that e.g. will be used during customer number generation',
          oneOf: [
            {
              type: 'string',
              minLength: 1,
              maxLength: 10
            },
            {
              type: 'null'
            }
          ]
        },
        id: {
          description: 'DEPRECATED: the legacy format for franchise ID',
          oneOf: [
            {
              type: 'string',
              minLength: 1,
              maxLength: 10
            },
            {
              type: 'null'
            }
          ]
        }
      }
    }
  ]
}
