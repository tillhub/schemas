const { oneOf } = require('../../../helpers/payload-or-null')

module.exports = {
  ...oneOf({
    type: 'object',
    properties: {
      summary: {
        ...oneOf({
          type: 'object'
        })
      }
    }
  })
}
