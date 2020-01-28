const { oneOf } = require('../../../../helpers/payload-or-null')

module.exports = {
  custom_id: {
    description: 'The Price Book custom id',
    type: 'string',
    maxLength: 128
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
  locations: oneOf({
    type: 'array',
    items: {
      type: 'string',
      format: 'uuid'
    }
  }),
  active: {
    type: 'boolean'
  },
  deleted: {
    type: 'boolean'
  }
}
