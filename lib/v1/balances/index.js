const commonResponse = require('../../common/response')
const { getEvent } = require('../../common/webhooks')
const response = require('../balances/legacy/response')

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

module.exports.legacy = {
  create: {
    request: require('./legacy/create.request'),
    response: {
      $id: 'https://schemas.tillhub.com/v1/balances.legacy.post.response.schema.json',
      $schema: 'http://json-schema.org/draft-07/schema#',
      ...commonResponse({ resultItems: require('./legacy/response') })
    }
  }
}

module.exports.event = {
    $id: 'https://schemas.tillhub.com/v1/balances.legacy.create.event.schema.json',
    $schema: 'http://json-schema.org/draft-07/schema#',
    ...getEvent(response, { eventEntityExample: 'balance' })
}
