const base = require('./base')

module.exports = {
  ...base({
    jobName: 'analytics_snapshots_discounts_share_of',
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
