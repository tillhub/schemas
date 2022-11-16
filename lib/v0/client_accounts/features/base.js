const { oneOf } = require('../../../helpers/payload-or-null')

module.exports = {
  savedcart: {
    type: 'boolean',
    default: true
  },
  datev: {
    type: 'boolean',
    default: false
  },
  crm: {
    type: 'boolean',
    default: false
  },
  invoices: {
    type: 'boolean',
    default: false
  },
  delivery_notes: {
    type: 'boolean',
    default: false
  },
  vouchers: {
    type: 'boolean',
    default: false
  },
  exports: {
    type: 'boolean',
    default: false
  },
  label_printing: {
    type: 'boolean',
    default: false
  },
  branch_management: {
    type: 'boolean',
    default: true
  },
  safe_management: {
    type: 'boolean',
    default: false
  },
  promotion_engine: {
    type: 'boolean',
    default: false
  },
  fiscalisation: {
    type: 'boolean',
    default: false
  },
  timetracking: {
    type: 'boolean',
    default: false
  },
  pagers: {
    type: 'boolean',
    default: false
  },
  kitchen_printers: {
    type: 'boolean',
    default: false
  },
  gastro_tables: {
    type: 'boolean',
    default: false
  },
  takeaway: {
    type: 'boolean',
    default: false
  },
  abocard: {
    type: 'boolean',
    default: false
  },
  cash_book: {
    type: 'boolean',
    default: false
  },
  webhooks: {
    type: 'boolean',
    default: false
  },
  inventory: {
    type: 'boolean',
    default: false
  },
  webview: oneOf({
    type: 'Object',
    properties: {
      enabled: {
        type: 'boolean',
        default: false
      }
    }
  })
}
