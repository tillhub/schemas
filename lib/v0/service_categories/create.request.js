const base = require('./base')

module.exports = {
  $id: 'https://schemas.tillhub.com/v0/service_categories.create.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  required: ['name'],
  ...base
}
