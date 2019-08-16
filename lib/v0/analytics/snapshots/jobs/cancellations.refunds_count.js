const base = require('./base')

module.exports = {
  ...base({
    jobName: 'analytics_snapshots_cancellations_refunds_count',
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
