const { response } = require('./base')
const commonResponse = require('../../common/response')

module.exports = {
  $id: 'https://schemas.tillhub.com/v0/service_categories.update.response.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  ...commonResponse({ resultItems: response })
}
