const commonResponse = require('../../common/response')
const clientObject = require('./client_object')

module.exports.get = {
  all: {
    response: {
      $id: 'https://schemas.tillhub.com/v1/balances.get-all.response.schema.json',
      $schema: 'http://json-schema.org/draft-07/schema#',
      ...commonResponse({ resultItems: clientObject }, { hasCursor: true })
    }
  },
  one: {
    response: {
      $id: 'https://schemas.tillhub.com/v1/balances.get-one.response.schema.json',
      $schema: 'http://json-schema.org/draft-07/schema#',
      ...commonResponse({ resultItems: clientObject }, { hasCursor: false })
    }
  }
}
