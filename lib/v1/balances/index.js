const commonResponse = require('../../common/response')

module.exports.create = {
  request: require('./create.request'),
  response: {
    $id: 'https://schemas.tillhub.com/v1/balances.post.response.schema.json',
    $schema: 'http://json-schema.org/draft-07/schema#',
    ...commonResponse({ resultItems: require('./response') })
  }
}

module.exports.get = {
  all: {
    response: {
      $id: 'https://schemas.tillhub.com/v1/balances.get-all.response.schema.json',
      $schema: 'http://json-schema.org/draft-07/schema#',
      ...commonResponse({ resultItems: require('./response') }, { hasCursor: true })
    }
  },
  one: {
    response: {
      $id: 'https://schemas.tillhub.com/v1/balances.get-one.response.schema.json',
      $schema: 'http://json-schema.org/draft-07/schema#',
      ...commonResponse({ resultItems: require('./response') }, { hasCursor: false })
    }
  }
}

module.exports.legacy = require('./legacy')
