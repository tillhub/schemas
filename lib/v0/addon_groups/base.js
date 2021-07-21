module.exports = {
  name: {
    description: 'any arbitrary name for an addon group that can be displayed in applications.',
    anyOf: [
      {
        type: 'string',
        maxLength: 64,
        minLength: 1
      },
      {
        type: 'null'
      }
    ]
  },
  multiselect: {
    description: 'can the cashier select multiple addons or just a single addon.',
    anyOf: [
      {
        type: 'boolean'
      },
      {
        type: 'null'
      }
    ]
  },
  max_selected: {
    description: 'how many addons can there be selected. Only applicable if multiselect is selected. use -1 for unlimited.',
    anyOf: [
      {
        type: 'integer',
        min: 1
      },
      {
        type: 'integer',
        min: -1,
        max: -1
      },
      {
        type: 'null'
      }
    ]
  },
  skipable: {
    description: 'can the cashier skip this addon group or if he must select an addon',
    anyOf: [
      {
        type: 'boolean'
      },
      {
        type: 'null'
      }
    ]
  },
  active: {
    description: 'Soft disable or enabled this branch.',
    type: 'boolean',
    default: true
  },
  deleted: {
    description: 'Soft delete this branch.',
    type: 'boolean',
    default: false
  },
  created_at: {
    type: 'string',
    format: 'date-time'
  },
  updated_at: {
    type: 'string',
    format: 'date-time'
  }
}
