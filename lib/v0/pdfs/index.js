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
    delivery_notes: {
      create: {
        request: require('./templates.delivery_notes.create.request')
      }
    }
  }
}
