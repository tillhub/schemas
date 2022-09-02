const { oneOf } = require('../../helpers/payload-or-null')

module.exports = {
  name: {
    type: 'string',
    example: 'Hair treatment questions',
    minLength: 1,
    maxLength: 128
  },
  description: oneOf({
    type: 'string',
    minLength: 1,
    maxLength: 4096
  }),
  custom_id: oneOf({
    type: 'string',
    minLength: 1,
    maxLength: 128
  }),
  service_questions: oneOf({
    type: 'array',
    description: 'An array of uuids of the products service questions',
    items: {
      type: 'string',
      format: 'uuid'
    }
  }),
  deleted: {
    type: 'boolean',
    default: false
  },
  active: {
    type: 'boolean',
    default: true
  }
}
