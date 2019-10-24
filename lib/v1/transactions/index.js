const commonResponse = require('../../common/response')

module.exports.create = {
  request: require('./create.request'),
  response: {
    $id: 'https://schemas.tillhub.com/v1/transactions.post.response.schema.json',
    $schema: 'http://json-schema.org/draft-07/schema#',
    ...commonResponse({ resultItems: require('./response') })
  }
}

module.exports.get = {
  all: {
    response: {
      $id: 'https://schemas.tillhub.com/v1/transactions.get-all.response.schema.json',
      $schema: 'http://json-schema.org/draft-07/schema#',
      ...commonResponse({ resultItems: require('./response') }, { hasCursor: true })
    }
  },
  one: {
    response: {
      $id: 'https://schemas.tillhub.com/v1/transactions.get-one.response.schema.json',
      $schema: 'http://json-schema.org/draft-07/schema#',
      ...commonResponse({ resultItems: require('./response') }, { hasCursor: false })
    }
  }
}

module.exports.legacy = {
  create: {
    request: require('./legacy/create.request'),
    response: {
      $id: 'https://schemas.tillhub.com/v1/transactions.legacy.post.response.schema.json',
      $schema: 'http://json-schema.org/draft-07/schema#',
      ...commonResponse({ resultItems: require('./legacy/response') })
    }
  }
}

module.exports.ext = {
  create: require('./components/transactions_ext/create'),
  update: require('./components/transactions_ext/update')
}
