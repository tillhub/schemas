
const { oneOf } = require('../../../../helpers/payload-or-null')

module.exports = {
  id: {
    description: 'The Policy id',
    type: 'string',
    format: 'uuid'
  },
  name: {
    ...oneOf({
      description: 'The Policy name',
      type: 'string',
      maxLength: 512
    })
  },
  reference_id: {
    description: 'The Reference id for its resource. Example: Price Book id.',
    type: 'string',
    maxLength: 512
  },
  policy: {
    description: 'The Policy object.',
    type: 'object'
  },
  active: {
    description: 'Soft disable or enable this policies.',
    type: 'boolean',
    default: true
  },
  deleted: {
    description: 'Soft delete this policies.',
    type: 'boolean',
    default: false
  }
}
