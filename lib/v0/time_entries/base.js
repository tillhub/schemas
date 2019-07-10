
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
  owner: {
    description: 'The client account',
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
    description: 'Arbitrary custom properties for this time entry.',
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
  active: {
    description: 'Soft disable or enabled this time entry.',
    type: 'boolean',
    default: true
  },
  deleted: {
    description: 'Soft delete this time entry.',
    type: 'boolean',
    default: false
  },
  metadata: {
    description: 'Arbitrary user defined data.',
    type: 'object',
    maxProperties: 10
  },
  location: {
    description: 'Arbitrary user location.',
    anyOf: [
      {
        type: 'string',
        maxLength: 255
      },
      {
        type: 'null'
      }
    ]
  }
}
