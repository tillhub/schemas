module.exports.children = {
  definitions: {
    children: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            format: 'uuid'
          },
          children: {
            type: 'object'
          }
        }
      }
    }
  }
}
