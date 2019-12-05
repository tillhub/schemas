const { oneOf } = require('../../../../helpers/payload-or-null')

module.exports = {
  id: {
    description: 'The Price Book id',
    type: 'string',
    format: 'uuid'
  },
  name: {
    ...oneOf({
      description: 'The Price Book name',
      type: 'string',
      maxLength: 512
    })
  },
  constraints: {
    ...oneOf(require('./constraints'))
  },
  policies: {
    description: 'The array of Policies references applied to this Price Book',
    type: 'array',
    items: {
      type: 'string',
      format: 'uuid'
    }
  },
  active: {
    type: 'boolean'
  },
  deleted: {
    type: 'boolean'
  }
}
