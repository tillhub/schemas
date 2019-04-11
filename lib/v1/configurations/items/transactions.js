module.exports = {
  type: 'object',
  properties: {
    signing: {
      type: 'object',
      properties: {
        type: {
          type: 'string',
          enum: [
            'fiskaltrust'
          ]
        },
        resource_type: {
          type: 'string',
          enum: [
            'branches'
          ]
        }
      }
    }
  }
}
