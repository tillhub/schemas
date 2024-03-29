module.exports = {
  start: {
    type: 'string',
    format: 'date-time'
  },
  end: {
    type: 'string',
    format: 'date-time'
  },
  deleted: {
    type: 'string',
    enum: [
      'true',
      'false'
    ]
  },
  active: {
    type: 'string',
    enum: [
      'true',
      'false'
    ]
  },
  q: {
    description: 'Search by voucher system name, with a partial match',
    example: 'abocard',
    type: 'string'
  }
}
