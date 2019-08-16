const base = require('./base')

module.exports = {
  ...base({
    jobName: 'analytics_snapshots_discounts_count',
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
