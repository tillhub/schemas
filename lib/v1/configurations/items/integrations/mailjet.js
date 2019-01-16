module.exports = {
  type: 'object',
  additionalProperties: false,
  properties: {
    key: {
      type: 'string',
      minLength: 1,
      maxLength: 256
    },
    secret: {
      type: 'string',
      minLength: 1,
      maxLength: 256
    },
    templates: {
      type: 'object',
      properties: {
        generic: {
          type: 'number'
        }
      }
    },
    sender: {
      type: 'object',
      properties: {
        email: {
          type: 'string',
          format: 'email'
        },
        name: {
          type: 'string',
          maxLength: 128
        }
      }
    }
  }
}
