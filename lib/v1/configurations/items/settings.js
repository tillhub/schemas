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
            ad_opt_out: oneOf({
              description: 'Specifies if advertisement opt-out is enabled.',
              type: 'boolean',
              default: false
            }),
            hide_sum_cart: oneOf({
              description: 'Specifies if hiding of cart sum is enabled.',
              type: 'boolean',
              default: false
            }),
            allow_voucher_reprint: oneOf({
              description: 'Specifies if vouchers can be printed again from e.g. the history details.',
              type: 'boolean',
              default: false
            }),
            cancellation_receipt: oneOf({
              description: 'Specifies if a receipt is printed when transaction is canceled after cart view.',
              type: 'boolean',
              default: false
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
            }),
            allow_editing_refund_items: oneOf({
              description: 'In case of refund items - specifies if quantity and price can be edited',
              type: 'boolean',
              default: false
            })
          }
        },
        language: {
          type: 'string',
          description: 'Specifies the preferable language code based on IETF language tag: https://en.wikipedia.org/wiki/IETF_language_tag',
          example: 'en-US',
          minLength: 1,
          maxLength: 12
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
            },
            transaction_signing: {
              type: 'string',
              description: 'If Printer TSE signing is active and all other conditions are met - define the opening in relation to the signing process',
              enum: [
                'before',
                'after'
              ],
              default: 'before'
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
              default: 50,
              minimum: 1,
              maximum: 1000
            },
            minutes: {
              type: 'integer',
              description: 'If more minutes have passed since the last update - a new update will be tried',
              default: 1440,
              minimum: 60,
              maximum: 14400
            },
            self_test: oneOf({
              description: 'defines epson self test conditions',
              type: 'object',
              properties: {
                info_minutes: {
                  type: 'integer',
                  description: 'If more minutes have passed since the last update - a new storage info will be requested from the hardware',
                  default: 1440,
                  minimum: 5,
                  maximum: 2880
                },
                threshold_minutes: {
                  type: 'integer',
                  description: 'If fewer minutes are left before a mandotory test - a self test will be performed on the hardware',
                  default: 2,
                  minimum: 1,
                  maximum: 120
                }
              }
            })
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
                'yyyy/MM/dd' // 2017/01/07
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
            schedule_time_minutes: {
              description: 'Time in minutes before scheduled objects will be set to pending state (tried for resynch)',
              oneOf: [
                {
                  type: 'integer',
                  default: 1440,
                  minimum: 1,
                  maximum: 10000
                },
                {
                  type: 'null'
                }
              ]
            },
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
                      maximum: 1000,
                      default: 100
                    },
                    {
                      type: 'null'
                    }
                  ]
                },
                active: {
                  // not yet supported on POS, always on
                  description: 'If true, products will be downloaded to the POS',
                  default: true,
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
                      maximum: 1000,
                      default: 200
                    },
                    {
                      type: 'null'
                    }
                  ]
                },
                active: {
                  // supported on POS, FALSE for e.g. KHG, TRUE by default
                  description: 'If true, products will be downloaded to the POS',
                  default: true,
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
                      maximum: 1000,
                      default: 250
                    },
                    {
                      type: 'null'
                    }
                  ]
                },
                active: {
                  // not yet supported on POS, always TRUE
                  description: 'If true, staffs will be downloaded to the POS',
                  default: true,
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
                      // not yet supported on POS
                      type: 'integer',
                      minimum: 1,
                      maximum: 500,
                      default: 500
                    },
                    {
                      type: 'null'
                    }
                  ]
                },
                active: {
                  // not yet supported on POS, always TRUE
                  description: 'If true, favourites will be downloaded to the POS',
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
                      maximum: 1000,
                      default: 100
                    },
                    {
                      type: 'null'
                    }
                  ]
                },
                active: {
                  // not yet supported on POS, always TRUE
                  description: 'If true, transactions will be downloaded to the POS',
                  default: true,
                  type: 'boolean'
                }
              }
            },
            carts: {
              type: 'object',
              additionalProperties: false,
              properties: {
                limit: {
                  description: 'Initial page size for syncing with GET all calls. In-app default is 500. Set this if you run into memory issues.',
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
                      maximum: 1000,
                      default: 50 // can be quite big and slow down parsers
                    },
                    {
                      type: 'null'
                    }
                  ]
                },
                active: {
                  // not yet supported on POS, always TRUE
                  description: 'If true, balances will be downloaded to the POS',
                  default: true,
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
                      maximum: 100,
                      default: 20
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
            staff: oneOf({ // LEGACY MAX NEBL STYLE, controls search AND regular download - no separation as of late 2023
              type: 'object',
              additionalProperties: false,
              properties: {
                online_search: oneOf({
                  description: 'Unlike the name suggests - controls adding a branch-parameter to sync and search calls',
                  type: 'string',
                  enum: [
                    'per_location'
                  ],
                  default: null // results in ignoring branch-paramneters in sync and search calls
                })
              }
            }),
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
            url: {
              description: 'URL of this account\'s dashboard',
              type: 'string' // client default kDashboardUrl is 'https://dashboard.tillhub.com' or 'https://staging-dashboard.tillhub.com'
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
        counting_numbers: oneOf({
          type: 'object',
          additionalProperties: false,
          properties: {
            preferred_initialization: oneOf({
              description: 'When local data ís missing - counting numbers can be initialized from the corresponding API table or - if available - from a secondary local storage (e.g. keychain on iOS)',
              type: 'string',
              enum: [
                // ONLY on a fresh POS installation
                'remote', // API data will be considered as primary source of truth and keychain data is ignored even when available
                'local' // local data will be considered as primary source of truth, API will be considered in absence of local data
              ],
              default: 'remote'
            })
          }
        }),
        voucher_systems_source: {
          description: 'Defines how the voucher systems table on the client will be filled, either from configurations or from the voucher_systems table',
          type: 'string',
          'enum': [
            'configurations', // legacy style, partially breaking proper nesting
            'voucher_systems' // new system with a single product per system and all nested prefixes and actions
          ],
          default: 'configurations' // starting from legacy
        },
        fiscally: oneOf({
          type: 'object',
          properties: {
            austria: oneOf({
              type: 'object',
              additionalProperties: false,
              properties: {
                tid: oneOf({
                  description: 'The "Teilnehmer-Identifikation" part of the FinanzOnline Cash Register Web Service User ("Registrierkassen-Webservice-Benutzer") credential triplet to be provided by the taxpayer',
                  type: 'string'
                }),
                benid: oneOf({
                  description: 'The "Benutzer-Identifikation" part of the FinanzOnline Cash Register Web Service User ("Registrierkassen-Webservice-Benutzer") credential triplet to be provided by the taxpayer.',
                  type: 'string'
                }),
                pin: oneOf({
                  description: 'The "PIN" part of the FinanzOnline Cash Register Web Service User ("Registrierkassen-Webservice-Benutzer") credential triplet to be provided by the taxpayer.',
                  type: 'string'
                })
              }
            })
          }
        })
      }
    }
  ]
}
