const { oneOf } = require('../helpers/payload-or-null')

function getGender () {
  return {
    description: 'Gender',
    example: 'male',
    ...oneOf({
      type: 'string',
      enum: [
        'male',
        'female',
        'unspecified'
      ]
    })
  }
}

module.exports = { getGender }
