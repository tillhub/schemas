module.exports = {
  'message': {
    'anyOf': [
      {
        'type': 'string',
        'maxLength': 64,
        'minLength': 1
      },
      {
        'type': 'null'
      }
    ]
  },
  'invoked_at': {
    'anyOf': [
      {
        'type': 'string',
        'format': 'date-time'
      },
      {
        'type': 'null'
      }
    ]
  },
  'consumer_type': {
    'anyOf': [
      {
        'type': 'string',
        'maxLength': 32,
        'minLength': 1
      },
      {
        'type': 'null'
      }
    ]
  },
  'channel': {
    'anyOf': [
      {
        'type': 'string',
        'maxLength': 32,
        'minLength': 1
      },
      {
        'type': 'null'
      }
    ]
  },
  'level': {
    'anyOf': [
      {
        'type': 'string',
        'maxLength': 32,
        'minLength': 1
      },
      {
        'type': 'null'
      }
    ]
  },
  'type': {
    'anyOf': [
      {
        'type': 'string',
        'maxLength': 32,
        'minLength': 1
      },
      {
        'type': 'null'
      }
    ]
  },
  'payload': {
    'type': 'object'
  },
  'metadata': {
    'anyOf': [
      {
        'type': 'object',
        'additionalProperties': false,
        'properties': {
          'user': {
            'type': 'string'
          },
          'route': {
            'type': 'string'
          }
        }
      },
      {
        'type': 'null'
      }
    ] },
  'ignorable': {
    'type': 'boolean'
  },
  'ignored': {
    'type': 'boolean'
  },
  'read': {
    'type': 'boolean'
  },
  'read_at': {
    'anyOf': [
      {
        'type': 'string',
        'format': 'date-time'
      },
      {
        'type': 'null'
      }
    ]
  },
  'deleted': {
    'type': 'boolean'
  },
  'progress': {
    'type': 'object'
  },
  'client_account': {
    'anyOf': [
      {
        'type': 'string',
        'maxLength': 32,
        'minLength': 1
      },
      {
        'type': 'null'
      }
    ]
  }
}
