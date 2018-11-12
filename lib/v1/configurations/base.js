module.exports = {
  vouchers: {
    type: 'object'
  },
  scan_prefixes: require('./items/scan_prefiexes'),
  voucher_actions: {
    type: 'array',
    items: {
      type: 'object'
    }
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
    type: 'object'
  },
  registers: {
    type: 'object'
  },
  branches: {
    type: 'object'
  },
  owner: {
    type: 'string',
    maxLength: 64
  },
  franchise: {
    type: 'object'
  },
  staff: {
    type: 'object'
  },
  financials: {
    anyOf: [
      {
        type: 'null'
      },
      {
        type: 'object'
      }
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
    type: 'object'
  },
  customers: {
    type: 'object'
  },
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
  level: require('./items/level'),
  taxes: require('./items/taxes'),
  analytics: require('./items/analytics')
}
