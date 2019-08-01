const { oneOf } = require('../../helpers/payload-or-null')

module.exports = {
  name: {
    description: 'Name of the custom hook',
    ...oneOf([
      {
        type: 'number',
        maxLength: 128
      }
    ])
  },
  event: {
    description: 'The event that should trigger the hook',
    type: 'string',
    'enum': [
      'on_scan',
      'after_payment'
    ]
  },
  context: {
    description: 'The POS context on which the hook should be triggered',
    type: 'string',
    'enum': [
      'library',
      'scan_view',
      'tiles',
      'payment'
    ]
  },
  hook: {
    description: 'The hook as a URL',
    type: 'string'
  },
  auth: {
    description: 'Info to use in order to authenticate with the provided hook',
    type: 'object',
    additionalProperties: false,
    properties: [
      {
        type: {
          description: 'Auth type',
          type: 'string',
          enum: [
            'basic'
          ]
        },
        user: {
          description: 'User name or email as identifier for the authentication',
          type: 'string'
        },
        pwd: {
          description: 'Password to use when authenticating',
          type: 'string'
        }
      }
    ],
    required: [
      'type',
      'user',
      'pwd' ]
  }
}
