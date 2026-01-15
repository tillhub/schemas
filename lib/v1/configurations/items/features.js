const { oneOf } = require('../../../helpers/payload-or-null')
const TimeInterval = {
  description: 'Defines a time interval.',
  type: 'object',
  properties: {
    unit: {
      description: 'Unit of the interval, defines a timeframe together with the set value.',
      type: 'string',
      enum: [
        'hours',
        'days',
        'weeks',
        'months',
        'years'
      ],
      default: 'months'
    },
    value: {
      description: 'The value of the interval, defines a timeframe together with the set unit.',
      type: 'integer',
      minimum: 0,
      maximum: 500,
      default: 2
    }
  }
}

module.exports = oneOf({
  type: 'object',
  properties: {
    library_view: oneOf({
      type: 'object',
      additionalProperties: false,
      properties: {
        enabled: {
          description: 'Specifies if library view is available.',
          type: 'boolean',
          default: true
        }
      }
    }),
    scan_view: oneOf({
      type: 'object',
      additionalProperties: false,
      properties: {
        enabled: {
          description: 'Specifies if scan view is available.',
          type: 'boolean',
          default: true
        }
      }
    }),
    pagers: oneOf({
      description: 'Restaurant case: pagers/coasters/buzzers',
      type: 'object',
      additionalProperties: false,
      properties: {
        enabled: {
          description: 'Specifies if the feature is available.',
          type: 'boolean',
          default: false
        },
        max: oneOf({
          type: 'integer',
          description: 'Largest pager number - serves as a helper to contrain the input component.',
          minimum: 10,
          maximum: 1000,
          example: 54,
          default: 99
        }),
        prompt: oneOf({
          description: 'If true and not previously assigned - show a prompt that asks the cashier to add a pager number on cart checkout',
          type: 'boolean',
          default: false
        })
      }
    }),
    payback: oneOf({
      description: 'Payback.de behavior configuration',
      type: 'object',
      additionalProperties: false,
      properties: {
        prompt: {
          description: 'If true - show a prompt that asks the customer for a payback number',
          type: 'boolean',
          default: false
        },
        number_format: {
          description: 'The format of the customer payback number that is being validated against the input',
          type: 'string',
          format: 'regex',
          example: '^[_A-Za-z0-9-+]+(\\.[_A-Za-z0-9-+]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z‌​]{2,})$',
          default: '^[0-9]{10}$'
        },
        number_length_max: {
          description: 'The maxiumum length of a customer payback number (as a helper for the UI)',
          type: 'integer',
          minimum: 2,
          maximum: 99,
          default: 10
        },
        type: oneOf({
          description: 'Type of the payback scheme, additional logic might apply.',
          type: 'string',
          enum: [
            'generic',
            'coop' // has predefined constants more or less for GS1
          ],
          default: 'generic'
        }),
        validation: oneOf({
          description: 'Type of the validation.',
          type: 'string',
          enum: [
            'none',
            'offline',
            'online' // fallback to offline if no results
          ],
          default: 'none'
        }),
        coop: oneOf({
          description: 'Coop specific settings',
          type: 'object',
          additionalProperties: false,
          properties: {
            base_url: oneOf({
              description: 'The URL of the cloudfunction to be used for online validation',
              type: 'string',
              format: 'uri',
              example: 'https://europe-west3-unzer-gcp-shared-prod.cloudfunctions.net/tillhub-external-rewards-microservice-prod-api'
            })
          }
        })
      }
    }),
    split_receipt: oneOf({
      description: 'Restaurant case: split bill by order items',
      type: 'object',
      additionalProperties: false,
      properties: {
        enabled: {
          description: 'Specifies if the feature is available.',
          type: 'boolean',
          default: false
        }
      }
    }),
    custom_endpoint_printing: oneOf({
      description: 'Custom endpoint printing from cart menu',
      type: 'object',
      additionalProperties: false,
      properties: {
        enabled: {
          description: 'Specifies if the feature is available.',
          type: 'boolean',
          default: false
        },
        url: {
          description: 'The URL of the endpoint',
          type: 'string',
          format: 'uri'
        },
        token: {
          description: 'Authorization bearer token',
          type: 'string'
        },
        name: {
          description: 'Display name of the action',
          type: 'string'
        },
        date_range: oneOf({
          description: 'Defines the maximum range for selectable start and end dates',
          type: 'object',
          additionalProperties: false,
          properties: {
            past: oneOf({
              ...TimeInterval
            }),
            future: oneOf({
              ...TimeInterval
            })
          }
        })
      }
    }),
    gastro_tables: oneOf({
      type: 'object',
      additionalProperties: false,
      properties: {
        enabled: {
          description: 'Specifies if gastro tables feature is available - mutually exclusive with \'web_view\'.',
          type: 'boolean',
          default: false
        }
      }
    }),
    wallets: oneOf({
      type: 'object',
      additionalProperties: false,
      properties: {
        enabled: {
          description: 'Specifies if the wallets feature is available.',
          type: 'boolean',
          default: false
        }
      }
    }),
    web_view: oneOf({
      description: 'Web view with js-interaction to iOS. Introduced by Regiondo project. Can not be used with Gastro.',
      type: 'object',
      additionalProperties: false,
      properties: {
        enabled: {
          description: 'Specifies if a web view is shown in the main sale view - mutually exclusive with \'gastro_tables\'.',
          type: 'boolean',
          default: false
        },
        suppress_errors: oneOf({
          description: 'Specifies if error messages should be suppressed on the UI',
          type: 'boolean',
          default: false
        }),
        sale_confirmation: oneOf({
          description: 'Specifies if sale confirmation is indicated',
          type: 'boolean',
          default: true
        }),
        url: {
          description: 'The URL of the web view',
          type: 'string',
          format: 'uri'
        },
        name: {
          description: 'Display name of the web view tab in the POS',
          type: 'string',
          example: 'Regiondo',
          minLength: 2,
          maxLength: 24
        },
        type: oneOf({
          description: 'Web view icon type',
          type: 'string',
          enum: [
            'none',
            'calendar'
          ],
          default: 'none'
        }),
        log_level: {
          description: 'defines the granularity of the web api logging.',
          type: 'string',
          enum: [
            'error',
            'warning',
            'info',
            'debug',
            'verbose' // request/response bodies
          ],
          default: 'info'
        }
      }
    }),
    manual_reference: oneOf({
      description: 'defines behavior for manually assigning external references to a cart',
      type: 'object',
      additionalProperties: false,
      properties: {
        enabled: {
          description: 'Specifies if - for given conditions - an external reference can be assigned manually to a cart (e.g. via the cart menu).',
          type: 'boolean',
          default: false
        },
        request_on_checkout: {
          description: 'Specifies if - for given conditions - an external reference will be requested on checkout (skippable).',
          type: 'string',
          enum: [
            'never',
            'if_missing',
            'always',
            'enforce_if_missing'
          ],
          default: 'if_missing'
        },
        custom_prompt: oneOf({
          description: 'Custom override of the question text before adding this reference manually.',
          type: 'string',
          example: 'There seems to be no order number set. Do you want to add it manually?',
          minLength: 2,
          maxLength: 512
        }),
        number_format: {
          description: 'The format of the reference number that is being validated against the input',
          type: 'string',
          format: 'regex',
          example: '^[_A-Za-z0-9-+]+(\\.[_A-Za-z0-9-+]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z‌​]{2,})$',
          default: '^(VAU)?[0-9]{7,11}$'
        },
        number_length_max: {
          description: 'The maxiumum length of the reference number (as a helper for the UI)',
          type: 'integer',
          minimum: 2,
          maximum: 99,
          default: 14
        }
      }
    }),
    questionnaire: oneOf({
      description: 'Defines a questionnaire with selectable answers.',
      type: 'object',
      additionalProperties: false,
      properties: {
        enabled: {
          description: 'Specifies if the questionnaire feature is available.',
          type: 'boolean',
          default: false
        },
        content: oneOf({
          description: 'List of questions to present.',
          type: 'array',
          items: {
            type: 'object',
            additionalProperties: false,
            properties: {
              id: {
                description: 'Unique identifier of the question.',
                type: 'string',
                minLength: 1,
                maxLength: 128
              },
              question: {
                description: 'Question text.',
                type: 'string',
                minLength: 1,
                maxLength: 512
              },
              type: oneOf({
                description: 'Question type.',
                type: 'string',
                enum: [
                  'simple_select'
                ],
                default: 'simple_select'
              }),
              required: {
                description: 'If true, this question must be answered.',
                type: 'boolean',
                default: false
              },
              answers: oneOf({
                description: 'List of selectable answers.',
                type: 'array',
                minItems: 1,
                maxItems: 5,
                items: {
                  type: 'object',
                  additionalProperties: false,
                  properties: {
                    id: {
                      description: 'Unique identifier of the answer.',
                      type: 'string',
                      minLength: 1,
                      maxLength: 128
                    },
                    content: {
                      description: 'Answer text.',
                      type: 'string',
                      minLength: 1,
                      maxLength: 256
                    }
                  }
                }
              })
            }
          }
        })
      }
    })
  }
})
