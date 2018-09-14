module.exports = {
  '$id': 'mock-schema.json',
  '$schema': 'http://json-schema.org/draft-07/schema#',
  'type': 'object',
  'additionalProperties': false,
  'required': [
    'items'
  ],
  'properties': {
    order: {
      description: 'the reference to a Tillhub order',
      oneOf: [
        {
          type: 'string',
          format: 'uuid'
        },
        {
          type: 'null'
        }
      ]
    },
    open: {
      desciption: 'the \'open\' status flag',
      type: 'boolean',
      default: 'true'
    },
    comments: {
      oneOf: [
        {
          type: 'string',
          minlength: 1,
          maxLength: 4096
        },
        {
          type: 'null'
        }
      ]
    },
    to: {}
  }
}
