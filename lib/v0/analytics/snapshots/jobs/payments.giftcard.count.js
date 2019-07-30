const base = require('./base')

module.exports = {
  ...base({
    jobName: 'analytics_snapshots_payments_giftcard_count',
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
