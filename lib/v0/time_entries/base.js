
module.exports = {
  type: {
    description: 'The type of the time entry.',
    type: 'string',
    'enum': [
      'day',
      'break'
    ]
  },
  description: {
    description: 'The description about the task.',
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
  start_time_entry: {
    description: 'The start of the time entry.',
    type: 'string',
    format: 'date-time'
  },
  end_time_entry: {
    description: 'The end of the time entry.',
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
    description: 'The staff member which is clocking in/out.',
    type: 'string',
    maxLength: 128
  },
  client_id: {
    description: 'The client id of the costumer.',
    anyOf: [
      {
        type: 'string',
        maxLength: 128
      },
      {
        type: 'null'
      }
    ]
  },
  custom_properties: {
    description: 'Any custom properties necessary.',
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
    description: 'Any metadata necessary.',
    type: 'object'
  },
  location: {
    description: 'Any location necessary.',
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
    type: 'boolean',
    description: 'If the time entry is deleted or not.',
    default: false
  },
  active: {
    type: 'boolean',
    description: 'If the time entry is active or not.',
    default: true

  }
}
