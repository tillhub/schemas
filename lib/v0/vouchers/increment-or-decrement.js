module.exports = {
  type: 'object',
  'additionalProperties': false,
  'properties': {
    'amount': {
      'type': 'number',
      'minimum': 0
    },
    'amount_cents': {
      'type': 'integer',
      'minimum': 0
    },
    'currency': {
      'type': 'string',
      'minLength': 3,
      'maxLength': 3
    },
    'code': {
      'type': 'string',
      'minLength': 1,
      'maxLength': 1024
    },
    'code_normalised': {
      'type': 'string',
      'minLength': 1,
      'maxLength': 1024
    },
    'metadata': {
      'type': 'object'
    }
  },
  'oneOf': [
    {
      'required': [
        'amount'
      ]
    },
    {
      'required': [
        'amount_cents'
      ]
    }
  ]
}
