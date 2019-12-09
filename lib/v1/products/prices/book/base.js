const { oneOf } = require('../../../../helpers/payload-or-null')

module.exports = {
  custom_id: {
    description: 'The Price Book custom id',
    type: 'string',
    format: 'varchar'
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
  active: {
    type: 'boolean'
  },
  deleted: {
    type: 'boolean'
  }
}
