const { oneOf } = require('../../../../../helpers/payload-or-null')
const { timeConstraints } = require('../../../../../common/time_constraints')

module.exports = {
  type: 'object',
  additionalProperties: false,
  properties: {
    time: oneOf({
      ...timeConstraints
    })
  }
}
