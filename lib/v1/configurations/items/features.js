module.exports = {
  type: 'object',
  anyOf: [
    {
      type: 'null'
    },
    {
      type: 'object',
      properties: {
        library_view: {
          anyOf: [
            {
              type: 'null'
            },
            {
              type: 'object',
              additionalProperties: false,
              properties: {
                enabled: {
                  description: 'Specifies if library view is available.',
                  type: 'boolean',
                  default: true
                }
              }
            }
          ]
        },
        scan_view: {
          anyOf: [
            {
              type: 'null'
            },
            {
              type: 'object',
              additionalProperties: false,
              properties: {
                enabled: {
                  description: 'Specifies if scan view is available.',
                  type: 'boolean',
                  default: true
                }
              }
            }
          ]
        }
      }
    }
  ]
}
