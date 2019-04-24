const { oneOf } = require('../../helpers/payload-or-null')

// NOTE: WIP
module.exports = {
  name: {
    ...oneOf([{
      type: 'string'
    }])
  },
  updated_id: {
    ...oneOf([{
      type: 'integer'
    }])
  },
  legacy_id: {
    ...oneOf([{
      type: 'integer'
    }])
  },
  deleted: {
    type: 'boolean',
    default: false
  }
}
