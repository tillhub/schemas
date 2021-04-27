module.exports = {
  templates: {
    deliveries: {
      create: {
        request: require('./templates.deliveries.create.request')
      }
    },
    invoices: {
      create: {
        request: require('./templates.invoices.create.request')
      }
    },
    full_receipts: {
      create: {
        request: require('./templates.full_receipts.create.request')
      }
    },
    delivery_notes: {
      create: {
        request: require('./templates.delivery_notes.create.request')
      }
    },
    transaction_receipts: {
      create: {
        request: require('./templates.transaction_receipts.create.request')
      }
    }
  }
}
