const base = require('./base')

module.exports = {
  ...base({
    jobName: 'analytics_snapshots_transactions_last_transaction',
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
