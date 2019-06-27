
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
        maxLength: 64,
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
  staff: {
    type: 'string',
    maxLength: 128
  },
  owner: {
    type: 'string',
    maxLength: 128
  },
  custom_properties: {
    anyOf: [
      {
        type: 'string',
        maxLength: 255
      },
      {
        type: 'null'
      }
    ]
  },
  metadata: {
    anyOf: [
      {
        type: 'string',
        maxLength: 255
      },
      {
        type: 'null'
      }
    ]
  },
  location: {
    anyOf: [
      {
        type: 'string',
        maxLength: 255
      },
      {
        type: 'null'
      }
    ]
  },
  deleted: {
    type: 'boolean'
  }
}
