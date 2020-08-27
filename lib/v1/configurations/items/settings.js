const { oneOf } = require('../../../helpers/payload-or-null')

module.exports = {
  oneOf: [
    {
      type: 'null'
    },
    {
      type: 'object',
      properties: {
        revision_safety: {
          type: 'object',
          additionalProperties: false,
          properties: {
            hide_sum_cart: oneOf({
              description: 'Specifies if hiding of cart sum is enabled.',
              type: 'boolean',
              default: false
            }),
            cancellation_receipt: oneOf({
              description: 'Specifies if a receipt is printed when transaction is canceled after cart view.',
              type: 'boolean',
              default: false
            }),
            visibilty_of_sum: oneOf({
              description: 'Specifies which sums are displayed on cart view if hide_sum_cart is enabled',
              type: 'array',
              items: {
                type: 'string',
                enum: [
                  'subtotal',
                  'discount',
                  'total',
                  'tax'
                ]
              }
            }),
            balance_reconciliation: oneOf({
              type: 'string',
              description: 'defines wether balance reconciliation with terminal is mandatory',
              enum: [
                'mandatory',
                'optional',
                'none'
              ]
            }),
            new_sale_conditions: oneOf({
              type: 'array',
              description: 'defines which conditions must be fulfilled prior to a new sale',
              items: {
                type: 'string',
                enum: [
                  'drawer_closed'
                ]
              }
            })
          }
        },
        language: {
          type: 'string',
          minLength: 1,
          maxLength: 5
        },
        invoice_generation: {
          description: 'waiting period for transaction to be sync, passed this parameter the invoice will be generated offline SECONDS',
          type: 'number',
          default: 2
        },
        drawer_open: oneOf({
          description: 'defines behaviour of cash drawer',
          type: 'object',
          properties: {
            finish_payment: {
              type: 'string',
              description: 'defines when the drawer is opened on finished payment',
              enum: [
                'cash',
                'always'
              ]
            }
          }
        }),
        epson_tse_state_update: oneOf({
          description: 'defines epson tse state updates (local retrieval plus upload)',
          type: 'object',
          properties: {
            transactions: {
              type: 'integer',
              description: 'If more transactions have been done since the last update - a new update will be tried',
              default: 50
            },
            minutes: {
              type: 'integer',
              description: 'If more minutes have passed since the last update - a new update will be tried',
              default: 120
            }
          }
        }),
        default_currency: {
          type: 'string',
          minLength: 3,
          maxLength: 3
        },
        default_timezone: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'null'
            }
          ]
        },
        default_date_format: {
          oneOf: [
            {
              type: 'string',
              enum: [
                'yyyy-MM-dd', // 2017-01-07
                'yyyy-M-d', // 2017-1-7
                'yyyyMMdd', // 2017-01-07
                'yyyyMd', // 201717
                'dd.MM.yyyy', // 07-01-2017
                'd.M.yyyy', // 7-1-2017
                'd. MMM. yyyy', // 7. Jan. 2017
                'd. MMMM. yyyy', // 7. January 2017
                'yy-MM-dd', // 17-07-01
                'yy-M-d', // 17-1-7
                'yyMMdd', // 170107
                'yyMd', // 1717
                'dd.MM.yy', // 07.01.17
                'd. MMM. yy', // 7. Jan. 17
                'd. MMMM. yy', // 7. January 17
                'MMM do, yyyy', // Jan 7th, 2017
                'MMM d, yyyy', // Jan 7, 2017
                'MMMM do, yyyy', // January 7th, 2017
                'MMMM d, yyyy', // January 7, 2017
                'MM/dd/yyyy', // 01/07/2017
                'dd/MM/yyyy', // 07/01/2017
                'yyyy/mm/dd' // 2017/01/07
              ]
            },
            {
              type: 'null'
            }
          ]
        },
        default_time_format: {
          oneOf: [
            {
              type: 'string',
              enum: [
                'hh:mm aa', // 09:09 AM
                'hh:mm aaaa', // 09:09 a.m.
                'h:mm aa', // 9:09 AM
                'h:mm aaaa', // 9:09 a.m.
                'HH:mm', // 21:09
                'H:mm' // 9:09
              ]
            },
            {
              type: 'null'
            }
          ]
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
            products: {
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
                },
                active: {
                  type: 'boolean'
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
                },
                active: {
                  type: 'boolean'
                }
              }
            },
            staffs: {
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
                },
                active: {
                  type: 'boolean'
                }
              }
            },
            favourites: {
              type: 'object',
              additionalProperties: false,
              properties: {
                limit: {
                  description: 'Initial page size for syncing with GET all calls. In-app default is 500. Set this if you run into timeouts.',
                  oneOf: [
                    {
                      type: 'integer',
                      minimum: 1,
                      maximum: 500
                    },
                    {
                      type: 'null'
                    }
                  ]
                },
                active: {
                  default: true,
                  type: 'boolean'
                },
                parameters: {
                  description: 'Defines the usage of parameters for up- and downstream.',
                  type: 'object',
                  properties: {
                    branch: {
                      description: 'Defines usage of the branch parameter.',
                      type: 'object',
                      properties: {
                        upstream: {
                          description: 'Defines if branch parameter is used in updatream.',
                          default: true,
                          type: 'boolean'
                        },
                        downstream: {
                          description: 'Defines if branch parameter is used in downstream.',
                          default: true,
                          type: 'boolean'
                        }
                      }
                    }
                  }
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
                },
                active: {
                  type: 'boolean'
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
                },
                active: {
                  type: 'boolean'
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
            products: {
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
            },
            customers: {
              type: 'object',
              additionalProperties: false,
              properties: {
                limit: {
                  description: 'Limits customers search results to a maximum of N',
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
                }
              }
            },
            staffs: {
              type: 'object',
              additionalProperties: false,
              properties: {
                limit: {
                  description: 'Limits staffs search results to a maximum of N',
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
                }
              }
            },
            vouchers: {
              type: 'object',
              additionalProperties: false,
              properties: {
                limit: {
                  description: 'Limits vouchers search results to a maximum of N',
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
                }
              }
            },
            transactions: {
              type: 'object',
              additionalProperties: false,
              properties: {
                limit: {
                  description: 'Limits transactions search results to a maximum of N',
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
        },
        voucher_systems_source: {
          description: 'Defines how the voucher systems table on the client will be filled, either from configurations or from the voucher_systems table',
          type: 'string',
          'enum': [
            'configurations', // legacy style, partially breaking proper nesting
            'voucher_systems' // new system with a single product per system and all nested prefixes and actions
          ],
          default: 'configurations' // starting from legacy
        },
        apollo: oneOf({
          type: 'object',
          additionalProperties: false,
          properties: {
            custom_order_receipt: {
              description: 'Temporary feature for the Apollo test phase',
              type: 'object',
              additionalProperties: false,
              properties: {
                enabled: {
                  type: 'boolean',
                  default: false
                },
                endpoint: {
                  type: 'string',
                  format: 'url',
                  example: 'https://arboreal-groove-198520.appspot.com/orders'
                },
                parameters: {
                  items: {
                    type: 'string',
                    example: 'branch',
                    enum: [
                      'branch'
                    ]
                  }
                },
                token: {
                  type: 'string',
                  example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImluZm9AYXBvbGxvLmRlIiwiZXhwIjoxNjAwNTE4MzMwLCJpYXQiOjE1OTA1MTgzMzAsImlqdCI6IjY5Yzc1ZTBlLWM4MTMtNGFkMS1hMDU1LWJjZDYyODA4MTYyMSIsImlzcyI6ImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOSIsIm5iZiI6MTU5MDUxODMzMCwidWlkIjoiNjljNzVlMGUtYzgxMy00YWQxLWEwNTUtYmNkNjI4MDgxNjIxIiwidXVpZCI6IjY5Yzc1ZTBlLWM4MTMtNGFkMS1hMDU1LWJjZDYyODA4MTYyMSJ9.3_WlUPW8mFza-VDne425EP40QeWmtkmh8Q7sjBu2W_4'
                }
              }
            }
          }
        })
      }
    }
  ]
}
