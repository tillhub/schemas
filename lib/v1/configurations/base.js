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
  voucher_actions: {
    oneOf: [
      {
        type: 'array',
        items: {
          type: 'object'
        }
      },
      {
        type: 'null'
      }
    ]
  },
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
  staff: {
    oneOf: [
      {
        type: 'object'
      },
      {
        type: 'null'
      }
    ]
  },
  financials: {
    anyOf: [
      {
        type: 'null'
      },
      require('./items/financials')
    ]
  },
  features: {
    anyOf: [
      {
        type: 'null'
      },
      {
        type: 'object'
      }
    ]
  },
  stock: {
    anyOf: [
      {
        type: 'null'
      },
      {
        type: 'object'
      }
    ]
  },
  transactions: {
    anyOf: [
      {
        type: 'null'
      },
      {
        type: 'object'
      }
    ]
  },
  products: {
    oneOf: [
      {
        type: 'object'
      },
      {
        type: 'null'
      }
    ]
  },
  customers: require('./items/customers'),
  saved_cart: {
    anyOf: [
      {
        type: 'null'
      },
      {
        type: 'object'
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
        type: 'object'
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
  receipts: {
    anyOf: [
      {
        type: 'null'
      },
      {
        type: 'object'
      }
    ]
  },
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
  carts: {
    anyOf: [
      {
        type: 'null'
      },
      {
        type: 'object'
      }
    ]
  },
  tips: {
    anyOf: [
      {
        type: 'null'
      },
      {
        type: 'object'
      }
    ]
  },
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
    anyOf: [
      {
        type: 'null'
      },
      {
        type: 'object'
      }
    ]
  },
  level: require('./items/level'),
  taxes: require('./items/taxes'),
  analytics: require('./items/analytics'),
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
      {
        type: 'object'
      }
    ]
  },
  integrations: require('./items/integrations')
}
