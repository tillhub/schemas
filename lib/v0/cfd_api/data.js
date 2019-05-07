const { actionBody, authBody, posBody, str } = require('./base')

module.exports = {
  '$id': 'https://schemas.tillhub.com/v0/cfd_api.events.data.schema.json',
  '$schema': 'http://json-schema.org/draft-07/schema#',
  'description': 'Revised schema for messages injected from CFD',
  'type': 'object',
  'oneOf': [
    {
      'properties': {
        'type': str('auth'),
        'body': authBody
      }
    },
    {
      'properties': {
        'type': str('action'),
        'body': actionBody
      }
    },
    {
      'properties': {
        'type': str('pos_message'),
        'body': posBody
      }
    }
  ],
  'required': ['type', 'body']
}
