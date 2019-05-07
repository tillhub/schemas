const { posBody } = require('./base')

module.exports = {
  '$id': 'https://schemas.tillhub.com/v0/cfd_api.events.pos_message.schema.json',
  '$schema': 'http://json-schema.org/draft-07/schema#',
  ...posBody
}
