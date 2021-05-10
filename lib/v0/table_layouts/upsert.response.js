const base = require('./complete_base')
const commonResponse = require('../../common/response')

module.exports = {
  $id: 'https://schemas.tillhub.com/v0/table_layouts.upsert.response.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  ...commonResponse({ resultItems: base })
}
