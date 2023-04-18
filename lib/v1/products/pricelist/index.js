const commonResponse = require('../../../common/response')
module.exports = {
  get: {
    all: {
      response: {
        $id: 'https://schemas.tillhub.com/v1/products.pricelist.get-all.response.schema.json',
        $schema: 'http://json-schema.org/draft-07/schema#',
        ...commonResponse({ resultItems: require('./response') }, { hasCursor: true })
      }
    }
  }
}
