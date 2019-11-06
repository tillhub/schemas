module.exports = {
  oneOf: [
    {
      type: 'null'
    },
    {
      type: 'object',
      additionalProperties: true,
      properties: {
        minimum_check_enabled: {
          description: "Enable email notifications on the client accounts email address, when a product's stock sinks below the defined stock minimum.",
          oneOf: [
            {
              type: 'null'
            },
            // type legacy regression. We gonna start writing booleans from the dashboard
            {
              type: 'string',
              enum: [
                'false',
                'true'
              ]
            },
            {
              type: 'boolean'
            }
          ]
        }
      }
    }
  ]
}
