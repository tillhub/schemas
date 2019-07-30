const base = require('./base')

module.exports = {
  ...base({
    jobName: 'analytics_snapshots_payments_card_revenue',
    valueItem: {
      label: {
        type: 'string'
      },
      data: {
        type: 'object',
        properties: {
          revenue: {
            type: 'number'
          },
          currency: {
            type: 'string',
            minLength: 3,
            maxLength: 3
          }
        }
      }
    }
  })
}
