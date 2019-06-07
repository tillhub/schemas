const { oneOf } = require('../../helpers/payload-or-null')

module.exports = {
  name: {
    type: 'string',
    example: 'Customer satisfaction',
    minLength: 1,
    maxLength: 128
  },
  description: {
    ...oneOf([{
      type: 'string',
      minLength: 1,
      maxLength: 4096
    }])
  },
  content: {
    type: 'string',
    description: 'The question itself that is going to displayed to the user',
    example: 'Was the service performed without any problems?',
    minLength: 1,
    maxLength: 4096
  },
  deleted: {
    type: 'boolean'
  },
  active: {
    type: 'boolean'
  }
}
