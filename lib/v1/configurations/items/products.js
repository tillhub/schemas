const { stripIndents } = require('common-tags')
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
                'user',
                'lowest_price',
                'highest_price'
              ]
            }),
            inheritance: oneOf({
              type: 'string',
              description: 'Defines how variant-children inherit pricebook entries from their parents',
              enum: [
                'none', // refers exclusively to its own entry
                'parent', // refers exclusively to its parent's entry (disregarding its own)
                'optional' // refers to its parent's entry only as a fallback
              ]
            })
          }
        },
        pricelist: oneOf({
          type: 'object',
          additionalProperties: false,
          properties: {
            type_precedence: oneOf({
              type: 'object',
              additionalProperties: false,
              properties: {
                enabled: {
                  description: 'If true - price type precedence should be respected.',
                  type: 'boolean',
                  default: true
                },
                priorities: oneOf({
                  description: 'Price types sorted by priority.',
                  type: 'array',
                  uniqueItems: true,
                  default: ['scaled', 'time-based', 'location-based', 'branch'],
                  items: {
                    type: 'string',
                    enum: [
                      'time-based',
                      'location-based',
                      'branch',
                      'scaled'
                    ]
                  }
                })
              }
            }),
            conflict_resolution: oneOf({
              type: 'string',
              description: 'Defines which price is chosen by default when conflicts remain with or without type precedence.',
              default: 'lowest_price',
              enum: [
                'user', // present the options to the cashier
                'lowest_price',
                'highest_price'
              ]
            })
          }
        }),
        product_id_template: {
          description: 'A Tillhub string pattern that allows for parameterized product id generation',
          oneOf: [
            {
              type: 'null'
            },
            {
              type: 'string',
              description: 'We need to have a SEQUENCE to assure the uniqueness of the id',
              minLength: 4,
              maxLength: 512,
              pattern: 'SEQUENCE'
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
        attributes_in_name: {
          description: 'Defines whether a child product inherits attributes as part of the product name',
          type: 'boolean',
          default: true
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
        product_sync_strip_branch_prices: {
          description: 'If true, product will get ONLY branch prices from current branch',
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
        barcode_search_pattern: oneOf({
          description: stripIndents`
          Search string extraction rules.

          Defines how a search string can be extracted from a scanned barcode (that might contain additional, non-search-related data).
          `,
          type: 'string',
          format: 'regex', // should have 1 capturing group only
          examples: [
            '^.{2}(.{8}).{4,6}$', // extracts characters 2-10 from a string of length 14 to 16
            '^(?:[0-9]{2}){0,1}([0-9]{8})[0-9]{6}$' // extracts digits 0-8|2-10 from a string of length 14|16
          ],
          default: 'null'
        }),
        serial_number_extraction_pattern: oneOf({
          description: stripIndents`
          Seroal number extraction rules.

          Defines how a serial number will potentially be extracted from a scanned barcode.
          `,
          type: 'string',
          format: 'regex',
          examples: [
            '^.{2}.{8}.({4,6})$', // extracts last 4 to 6 characters from a string of length 14 to 16
            '^(?:[0-9]{2}){0,1}[0-9]{8}([0-9]{6})$' // extracts digits 9-14|11-16 from a digit string of length 14|16
          ],
          default: 'null'
        }),
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
          deprecated: true,
          description: stripIndents`
            If true, a product can be added to the cart with 0.0 as price or its price can be changed to 0.0.

            NOTE: Hard validation will be removed entirely!
                  Behavior will be driven by 'v1/products.configuration.pricing.request_input'
                  and 'v1/products.configuration.pricing.zero_input_allowed'.
          `,
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
