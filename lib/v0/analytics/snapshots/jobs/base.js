module.exports = function ({ jobName, values, valueItem }) {
  return {
    created_at: {
      type: 'string',
      format: 'date-time'
    },
    metric: {
      job: jobName,
      user: {
        description: 'ID of the client account',
        type: 'string'
      }
    },
    count: {
      description: 'Count of items in values',
      type: 'number'
    },
    values: {
      type: 'array',
      items: valueItem
    }
  }
}
