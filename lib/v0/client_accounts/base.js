const demoData = require('./demoData')

module.exports = {
  name: {
    type: 'string'
  },
  display_name: {
    type: 'string',
    pattern: '^[a-z0-9_-]*$'
  },
  email: {
    type: 'string',
    format: 'email'
  },
  email_confirmed: {
    type: 'boolean'
  },
  password: {
    type: 'string',
    minLength: 5,
    maxLength: 36
  },
  test_account: {
    type: 'boolean'
  },
  template: {
    type: 'string',
    'enum': [
      'tillhub_init',
      'tillhub_init_legacy'
    ],
    'default': 'tillhub_init'
  },
  dashboard: {
    type: 'string',
    'enum': [
      'tillhub',
      'shore',
      'localsearch'
    ],
    'default': 'tillhub'
  },
  demo_data: {
    anyOf: [
      {
        ...demoData
      },
      {
        type: 'null'
      }
    ]
  },
  whitelabel: {
    oneOf: [
      {
        type: 'string'
      },
      {
        type: 'null'
      }
    ]
  }
}
