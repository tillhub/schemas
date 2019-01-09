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
    }
  }
}
