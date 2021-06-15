const commonResponse = require('../../common/response')

module.exports.deltas = {
  create: {
    request: require('./deltas/create.request'),
    response: {
      $id: 'https://schemas.tillhub.com/v1/gastro_orders.deltas.post.response.schema.json',
      $schema: 'http://json-schema.org/draft-07/schema#',
      ...commonResponse({ resultItems: require('./deltas/response') })
    }
  }
}

module.exports.states = {
  create: {
    request: require('./deltas/create.request'),
    response: {
      $id: 'https://schemas.tillhub.com/v1/gastro_orders.states.post.response.schema.json',
      $schema: 'http://json-schema.org/draft-07/schema#',
      ...commonResponse({ resultItems: require('./states/response') })
    }
  }
}
