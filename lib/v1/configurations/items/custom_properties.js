const customProperties = require('../../../common/custom_properties')

module.exports = {
  oneOf: [
    {
      type: 'null'
    },
    {
      ...customProperties.definition
    }
  ]
}
