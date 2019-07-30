const base = require('./base')

module.exports = {
  ...base({
    jobName: 'analytics_snapshots_transactions_first_transaction',
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
