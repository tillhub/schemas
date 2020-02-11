const { oneOf } = require('../../../helpers/payload-or-null')

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
        auto_lock: oneOf({
          description: 'Settings for inactivity monitor.',
          type: 'object',
          properties: {
            enabled: oneOf({
              type: 'boolean',
              default: false
            }),
            idle_time: oneOf({
              description: 'Allowed idle time in seconds before locking the application',
              type: 'number',
              minimum: 0,
              default: 120
            })
          }
        }),
        third_party: {
          description: 'Third party app links',
          type: 'array',
          items: {
            type: 'object',
            additionalProperties: false,
            properties: {
              title: {
                description: 'Display title of a 3rd-party-link.',
                type: 'string',
                example: 'Shore',
                minLength: 2,
                maxLength: 64
              },
              scheme: {
                description: 'URL-scheme to use for this link',
                type: 'string',
                example: 'de.termine24.dienstleister.production.tillhub-url-scheme',
                minLength: 3,
                maxLength: 256
              },
              itunes: {
                description: 'App Store ID to use if 3rd-party-app is not installed',
                oneOf: [
                  {
                    type: 'string',
                    example: 'id548235635',
                    minLength: 3,
                    maxLength: 256
                  },
                  {
                    type: 'null'
                  }
                ]
              },
              icon: {
                description: 'Name of the icon file used on the client',
                oneOf: [
                  {
                    type: 'string',
                    example: 'ic_app_shore',
                    minLength: 3,
                    maxLength: 128
                    // should be replaced by dynamic content
                  },
                  {
                    type: 'null'
                  }
                ]
              }
            }
          }
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
            },
            customers: {
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
            },
            staff: {
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
            },
            transactions: {
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
            },
            balances: {
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
        register: {
          description: 'Defines the settings on register opening and closing ',
          type: 'object',
          additionalProperties: false,
          properties: {
            open: {
              type: 'object',
              additionalProperties: false,
              properties: {
                counting_policy: {
                  ...oneOf({
                    description: 'Defines if counting protocol is active or not on register opening',
                    type: 'string',
                    enum: [
                      'none',
                      'required'
                    ]
                  })
                }
              }
            },
            close: {
              type: 'object',
              additionalProperties: false,
              properties: {
                counting_policy: {
                  ...oneOf({
                    description: 'Defines if counting protocol is active or not on register closing',
                    type: 'string',
                    enum: [
                      'none',
                      'required'
                    ]
                  })
                }
              }
            }
          }
        },
        search: {
          description: 'Limits in-app searches.',
          type: 'object',
          additionalProperties: false,
          properties: {
            product: {
              type: 'object',
              additionalProperties: false,
              properties: {
                limit: {
                  description: 'Limits product search results to a maximum of N',
                  oneOf: [
                    {
                      type: 'integer',
                      minimum: 1,
                      maximum: 20
                    },
                    {
                      type: 'null'
                    }
                  ]
                },
                only_self_sustained: {
                  description: `Instruct clients to filter for types 'variant_product', 'product' and 'voucher'`,
                  type: 'boolean'
                }
              }
            }
          }
        },
        dashboard: {
          description: 'Dashboard settings (overrides client defaults, client defaults are set differently also for white label apps).',
          type: 'object',
          additionalProperties: false,
          properties: {
            availability: {
              type: 'string',
              'enum': [
                'legacy', // only the legacy dashboard (url) is available
                'new', // only the new dashboard (url_new) is available
                'both' // both dashboards are available and the user is prompted for selection
              ],
              default: 'legacy'
            },
            url: {
              description: 'URL of this account\'s perferred LEGACY dashboard',
              type: 'string' // client default kDashboardUrlLegacy is 'https://dashboard.tillhub.de' or 'https://awsxstaging.tillhub.de'
            },
            url_new: {
              description: 'URL of this account\'s perferred NEW dashboard',
              type: 'string' // client default kDashboardUrl is 'https://dashboard.tillhub.com' or 'https://staging-dashboard.tillhub.com'
            },
            auth: {
              description: ' -- client reads but does not use this, please provide a proper description --',
              oneOf: [
                {
                  type: 'string'
                },
                {
                  type: 'null'
                }
              ]
            },
            navigation_after_creation: oneOf({
              type: 'string',
              enum: [
                'list',
                'edit'
              ]
            })
          }
        },
        help_center: {
          description: 'Help-Center settings (overrides client defaults).',
          type: 'object',
          additionalProperties: false,
          properties: {
            url: {
              description: 'URL of this account\'s perferred help center',
              type: 'string'
            }
          }
        },
        support: {
          description: 'Decides whether or not the support team is allowed to access the account this configuration belongs to.',
          type: 'boolean',
          default: true
        },
        expenses: oneOf({
          type: 'object',
          additionalProperties: false,
          properties: {
            drawer_open: oneOf({
              type: 'string',
              enum: [
                'entry',
                'booking'
              ]
            })
          }
        }),
        buttons: {
          description: 'Action (checkout) buttons configuration.',
          type: 'array',
          items: {
            type: 'object',
            additionalProperties: false,
            properties: {
              show_always: {
                type: 'boolean',
                default: true
              },
              name: {
                type: 'string'
              },
              condition: { // this should be deprecated and replaced by conditions
                type: 'array',
                items: {
                  type: 'object',
                  additionalProperties: false,
                  properties: {
                    tax: {
                      description: 'Tax account this butten will select when available on a per-item base and if default == FALSE.',
                      type: 'string',
                      format: 'uuid'
                    },
                    default: {
                      description: 'If TRUE the default behavior of the checkout button (without additional logic) will be used.',
                      type: 'boolean',
                      default: false
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
