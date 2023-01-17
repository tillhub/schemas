module.exports.request = {
  $id: 'https://schemas.tillhub.com/v0/analytics.staff.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  'additionalProperties': true,
  'properties': {
    'start': {
      'type': 'string'
    },
    'end': {
      'type': 'string'
    },
    'branch': {
      'type': 'string',
      'format': 'uuid'
    },
    'branch_group': {
      "anyOf": [
        {
          "type": "string",
          "format": "uuid"
        },
        {
          "type": "array",
          "items": {
            "type": "string",
            "format": "uuid"
          }
        }
      ]
    },
    'staff_number': {
      'type': 'string',
      'minLength': 1,
      'maxLength': 64
    }
  },
  'required': []
}
