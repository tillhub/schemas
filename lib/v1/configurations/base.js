const { oneOf } = require('../../helpers/payload-or-null')

module.exports = {
  configurations: {
    description: 'DEPRECATED: Unused legacy property.',
    oneOf: [
      {
        type: 'null'
      },
      {
        type: 'object'
      }
    ]
  },
  vouchers: {
    oneOf: [
      {
        type: 'object'
      },
      {
        type: 'null'
      }
    ]
  },
  scan_prefixes: require('./items/scan_prefixes'),
  voucher_actions: require('./items/voucher_actions'),
  expenses_deposits: oneOf({
    type: 'object',
    additionalProperties: true,
    properties: require('./items/expenses_deposits')
  }),
  countings: oneOf({
    type: 'object',
    additionalProperties: true,
    properties: require('./items/countings')
  }),
  time_tracking: oneOf({
    type: 'object',
    additionalProperties: true,
    properties: require('./items/time_tracking')
  }),
  settings: require('./items/settings'),
  hooks: require('./items/hooks'),
  themes: require('./items/themes'),
  name: {
    anyOf: [
      {
        type: 'null'
      },
      {
        type: 'string',
        maxLength: 32
      }
    ]
  },
  client_id: {
    anyOf: [
      {
        type: 'null'
      },
      {
        type: 'string',
        maxLength: 64
      }
    ]
  },
  metadata: {
    oneOf: [
      {
        type: 'object'
      },
      {
        type: 'null'
      }
    ]
  },
  registers: {
    oneOf: [
      {
        type: 'object'
      },
      {
        type: 'null'
      }
    ]
  },
  branches: {
    oneOf: [
      {
        type: 'object'
      },
      {
        type: 'null'
      }
    ]
  },
  owner: {
    type: 'string',
    maxLength: 64
  },
  franchise: require('./items/franchise'),
  staff: require('./items/staff'),
  financials: {
    anyOf: [
      {
        type: 'null'
      },
      require('./items/financials')
    ]
  },
  features: require('./items/features'),
  gastro: require('./items/gastro'),
  stock: require('./items/stock'),
  transactions: oneOf(require('./items/transactions')),
  products: oneOf(require('./items/products')),
  customers: require('./items/customers'),
  saved_cart: {
    anyOf: [
      {
        type: 'null'
      },
      {
        type: 'object',
        additionalProperties: false,
        properties: {
          enabled: {
            description: 'Specifies if saved carts are available.',
            type: 'boolean',
            default: true
          },
          logs_enabled: {
            description: 'Specifies if saved carts logging is enabled.',
            type: 'boolean',
            default: false
          },
          confirm_deletion: {
            description: 'Specifies if the deletion of saved carts must be confirmed.',
            type: 'boolean',
            default: true
          },
          presentation: {
            type: 'object',
            description: 'Specifies presentation to the user.',
            additionalProperties: false,
            properties: {
              filter: {
                description: 'Defines cart grouping',
                type: 'string',
                'enum': [
                  'none', // present all carts together
                  'instant_checkout' // present carts separated by the instant_checkout flag value
                ],
                default: 'none' // present all carts together
              }
            }
          },
          sync: {
            description: 'Describes the synching behavior of saved carts.',
            type: 'object',
            additionalProperties: false,
            properties: {
              auto: {
                description: 'Specifies if saved carts should be synched automatically.',
                type: 'boolean',
                default: true
              },
              interval: {
                description: 'If auto is enabled - saved carts will be synched automatically every interval SECONDS.',
                type: 'number',
                default: 120.0
              }
            }
          }
        }
      }
    ]
  },
  crm: {
    anyOf: [
      {
        type: 'null'
      },
      {
        type: 'object'
      }
    ]
  },
  datev: {
    anyOf: [
      {
        type: 'null'
      },
      {
        type: 'object'
      }
    ]
  },
  label_printer: {
    anyOf: [
      {
        type: 'null'
      },
      {
        type: 'object'
      }
    ]
  },
  delivery_note: {
    anyOf: [
      {
        type: 'null'
      },
      {
        type: 'object',
        additionalProperties: false,
        properties: {
          enabled: {
            description: 'Specifies if delivery notes are available.',
            type: 'boolean',
            default: true
          }
        }
      }
    ]
  },
  shore: {
    anyOf: [
      {
        type: 'null'
      },
      {
        type: 'object'
      }
    ]
  },
  togo: {
    anyOf: [
      {
        type: 'null'
      },
      {
        type: 'object'
      }
    ]
  },
  receipts: require('./items/receipts'),
  orders: {
    anyOf: [
      {
        type: 'null'
      },
      {
        type: 'object'
      }
    ]
  },
  carts: require('./items/carts'),
  tips: require('./items/tips'),
  emails: {
    anyOf: [
      {
        type: 'null'
      },
      {
        type: 'object'
      }
    ]
  },
  communications: {
    oneOf: [
      {
        type: 'null'
      },
      require('./items/communications')
    ]
  },
  level: require('./items/level'),
  taxes: require('./items/taxes'),
  analytics: require('./items/analytics'),
  interfaces: require('./items/interfaces'),
  custom_dashboards: {
    oneOf: [
      {
        type: 'null'
      },
      require('./items/custom_dashboards')
    ]
  },
  deliveries: {
    type: 'object'
  },
  validations: {
    oneOf: [
      {
        type: 'null'
      },
      {
        type: 'object'
      }
    ]
  },
  payments: {
    oneOf: [
      {
        type: 'null'
      },
      {
        type: 'object'
      }
    ]
  },
  balances: {
    oneOf: [
      {
        type: 'null'
      },
      require('./items/balances')
    ]
  },
  integrations: require('./items/integrations'),
  discounts: {
    oneOf: [
      {
        type: 'null'
      },
      require('./items/discounts')
    ]
  },
  clients: {
    oneOf: [
      {
        type: 'object',
        properties: {
          enabled: {
            type: 'boolean'
          }
        }
      },
      {
        type: 'null'
      }
    ]
  },
  widgets: {
    oneOf: [
      {
        type: 'null'
      },
      {
        type: 'object'
      }
    ]
  },
  searches: {
    oneOf: [
      {
        type: 'null'
      },
      require('./items/searches')
    ]
  },
  custom_properties: require('./items/custom_properties'),
  ui_configurations: require('./items/ui_configurations'),
  created_at: {
    type: 'string',
    format: 'date-time',
    example: '2019-03-17T21:12:04.849Z'
  },
  updated_at: {
    type: 'string',
    format: 'date-time',
    example: '2019-03-17T21:12:04.849Z'
  },
  warehub: require('./items/warehub'),
  tenant: require('./items/tenant'),
  onboarding: require('./items/onboarding')
}
