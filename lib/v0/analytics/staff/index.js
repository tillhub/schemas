module.exports.request = {
  $id: 'https://schemas.tillhub.com/v0/analytics.staff.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  'additionalProperties': true,
  'properties': {
    'branch': {
      'type': 'string',
      'format': 'uuid'
    },
    'start': {
      'type': 'string'
    },
    'end': {
      'type': 'string'
    }
  },
  'required': []
}
