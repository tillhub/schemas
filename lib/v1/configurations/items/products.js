const { oneOf } = require('../../../helpers/payload-or-null')

module.exports = {
  oneOf: [
    {
      type: 'null'
    },
    {
      type: 'object',
      properties: {
        strict_mode: {
          description: 'If true and the template contains product group - product group ID will be a required property for product ID generation.',
          oneOf: [
            {
              type: 'null'
            },
            {
              type: 'boolean',
              default: false
            }
          ]
        },
        pricebook: {
          type: 'object',
          additionalProperties: false,
          properties: {
            selection_type: oneOf({
              type: 'string',
              description: 'Defines which price is chosen by default when conflict',
              enum: [
                'default',
                'pricebook',
                'user'
              ]
            })
          }
        },
        product_id_template: {
          description: 'A Tillhub string pattern that allows for parameterized product id generation',
          oneOf: [
            {
              type: 'null'
            },
            {
              type: 'string',
              minLength: 4,
              maxLength: 512
            }
          ]
        },
        generate_product_id: {
          description: 'The toggle to opt-in or -out of the product number generation. Send this as query parameter on creation: ?generate_product_id=true',
          oneOf: [
            {
              type: 'null'
            },
            {
              type: 'boolean',
              default: false
            }
          ]
        },
        auto_product_number_enabled: { // should be deprecated
          description: 'If true, product id will be generated automatically',
          oneOf: [
            {
              type: 'null'
            },
            {
              type: 'boolean',
              default: false
            }
          ]
        },
        auto_product_group_number_enabled: { // should be deprecated
          description: 'If true, product group number will be generated automatically',
          oneOf: [
            {
              type: 'null'
            },
            {
              type: 'boolean',
              default: false
            }
          ]
        },
        product_number_length: {
          description: 'Auto product number length',
          oneOf: [
            {
              type: 'null'
            },
            {
              type: 'integer',
              default: 4
            }
          ]
        },
        product_group_number_length: {
          description: 'Auto product group number length',
          oneOf: [
            {
              type: 'null'
            },
            {
              type: 'integer',
              default: 3
            }
          ]
        },
        barcode_length: {
          description: 'Barcode length',
          oneOf: [
            {
              type: 'null'
            },
            {
              type: 'integer',
              default: 15
            }
          ]
        },
        show_product_number: {
          description: 'Shows the product number on the UI',
          oneOf: [
            {
              type: 'null'
            },
            {
              type: 'boolean',
              default: false
            }
          ]
        },
        show_product_group_number: {
          description: 'Shows the product group number on the UI',
          oneOf: [
            {
              type: 'null'
            },
            {
              type: 'boolean',
              default: false
            }
          ]
        },
        allow_zero_prices: {
          description: 'If true, a product can be added to the cart with 0.0 as price or its price can be changed to 0.0.',
          oneOf: [
            {
              type: 'null'
            },
            {
              type: 'boolean',
              default: true // keeping established default behavior
            }
          ]
        },
        show_empty_options: {
          description: 'If true, children with availability 0 will be shown in the option selection process',
          oneOf: [
            {
              type: 'null'
            },
            {
              type: 'boolean',
              default: true // keeping established default behavior
            }
          ]
        },
        systems: {
          description: 'External usage of products',
          type: 'array',
          items: {
            type: 'object',
            properties: {
              auth: {
                type: 'object',
                properties: {
                  type: {
                    type: 'string',
                    'enum': [
                      'token'
                    ]
                  },
                  secret: {
                    type: 'string',
                    minLength: 3,
                    maxLength: 64
                  }
                }
              },
              name: {
                type: 'string',
                minLength: 1,
                maxLength: 128
              },
              sync: {
                type: 'object',
                properties: {
                  label: {
                    type: 'string',
                    minLength: 1,
                    maxLength: 128
                  },
                  hooks: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        uri: {
                          type: 'string',
                          format: 'uri'
                        },
                        type: {
                          type: 'string',
                          'enum': [
                            'webhook'
                          ]
                        },
                        auth: {
                          type: 'object',
                          properties: {
                            type: {
                              type: 'string',
                              'enum': [
                                'basic'
                              ]
                            },
                            payload: {
                              type: 'string',
                              minLength: 3,
                              maxLength: 64
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  ]
}
