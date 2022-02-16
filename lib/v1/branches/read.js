const commonResponse = require('../../common/response')
const { all } = require('../../v0/branches/read')

module.exports.all = {
  query: {
    ...all.query,
    $id: 'https://schemas.tillhub.com/v1/branches.read.all.query.schema.json'
  },
  response: {
    ...all.response,
    $id: 'https://schemas.tillhub.com/v1/branches.read.all.response.schema.json',
    ...commonResponse({
      resultItems: all.response.properties.results.items
    }, { hasCursor: true })
  }
}
