const base = require('./base')

module.exports = {
  ...base({
    jobName: 'analytics_snapshots_payments_card_count',
    valueItem: {
      label: {
        type: 'string'
      },
      data: {
        type: 'number'
      }
    }
  })
}
