module.exports = {
  type: 'object',
  properties: {
    display: {
      type: 'object',
      properties: {
        show_inactive: {
          default: false,
          oneOf: [
            {
              type: 'null'
            },
            {
              type: 'boolean'
            }
          ]
        }
      }
    }
  }
}
