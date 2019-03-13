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
        },
        sync: {
          description: 'Drives in-app syncing behaviour.',
          type: 'object',
          additionalProperties: false,
          properties: {
            product: {
              type: 'object',
              additionalProperties: false,
              properties: {
                limit: {
                  description: 'Initial page size for syncing with GET all calls. In-app default is 500. Set this if you run into timeouts.',
                  oneOf: [
                    {
                      type: 'integer',
                      minimum: 1,
                      maximum: 1000
                    },
                    {
                      type: 'null'
                    }
                  ]
                }
              }
            }
          }
        },
        support: {
          description: 'Decides whether or not the support team is allowed to access the account this configuration belongs to.',
          type: 'boolean',
          default: true
        }
      }
    }
  ]
}
