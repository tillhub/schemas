const { authBody } = require('./base')

module.exports = {
  '$id': 'https://schemas.tillhub.com/v0/cfd_api.events.auth.schema.json',
  '$schema': 'http://json-schema.org/draft-07/schema#',
  ...authBody
}
