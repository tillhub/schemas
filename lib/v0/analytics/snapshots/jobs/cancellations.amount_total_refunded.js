const base = require('./base')

module.exports = {
  ...base({
    jobName: 'analytics_snapshots_cancellations_amount_total_refunded',
    valueItem: {
      label: {
        type: 'string'
      },
      data: {
        type: 'object',
        properties: {
          amount_total: {
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
