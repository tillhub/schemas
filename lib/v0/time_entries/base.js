
module.exports = {
  type: {
    type: 'string',
    'enum': [
      'day',
      'break'
    ]
  },
  description: {
    anyOf: [
      {
        type: 'string',
        maxLength: 32,
        minLength: 0
      },
      {
        type: 'null'
      }
    ]
  },
  start: {
    type: 'string',
    format: 'date-time'
  },
  end: {
    anyOf: [
      {
        type: 'string',
        format: 'date-time'
      },
      {
        type: 'null'
      }
    ]
  },
  staff_id: {
    type: 'string',
    maxLength: 128
  },
  project_id: {
    type: 'string',
    maxLength: 128
  }
}
