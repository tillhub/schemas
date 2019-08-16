const base = require('./base')

module.exports = {
  ...base({
    jobName: 'analytics_snapshots_cancellations_share_of_cancelled',
    valueItem: {
      label: {
        type: 'string'
      },
      data: {
        type: 'number',
        minimum: 0,
        maximum: 1
      }
    }
  })
}
