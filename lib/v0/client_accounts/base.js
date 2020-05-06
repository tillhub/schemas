const features = require('./features/base')

module.exports = {
  name: {
    type: 'string',
    maxLength: 64
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
      'tillhub_legacy',
      'shore',
      'localsearch'
    ],
    'default': 'tillhub'
  },
  demo_data: {
    oneOf: [
      {
        type: 'null'
      },
      require('./demoData')
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
  },
  comments: {
    oneOf: [
      {
        type: 'string',
        maxLength: 4096
      },
      {
        type: 'null'
      }
    ]
  },
  is_test: {
    type: 'boolean',
    default: false
  },
  is_demo: {
    type: 'boolean',
    default: false
  },
  is_trial: {
    type: 'boolean',
    default: false
  },
  default_language: {
    oneOf: [
      {
        type: 'string',
        minLength: 1,
        maxLength: 5
      },
      {
        type: 'null'
      }
    ]
  },
  default_currency: {
    type: 'string',
    minLength: 3,
    maxLength: 3
  },
  trial_until: {
    oneOf: [
      {
        type: 'string',
        format: 'date-time'
      },
      {
        type: 'null'
      }
    ]
  },
  active_until: {
    oneOf: [
      {
        type: 'string',
        format: 'date-time'
      },
      {
        type: 'null'
      }
    ]
  },
  active_until_years: {
    description: 'The value in years to increment the active until date from now.',
    oneOf: [
      {
        type: 'integer',
        maximum: 5,
        minimum: 1
      },
      {
        type: 'null'
      }
    ]
  },
  features: {
    type: 'object',
    additionalProperties: false,
    description: 'Feature flags enabling/disabling current features.',
    properties: features
  }
}
