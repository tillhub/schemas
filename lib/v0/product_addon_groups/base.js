const { oneOf } = require('../../helpers/payload-or-null')

module.exports = {
  name: {
    description: 'any arbitrary name for an addon group that can be displayed in applications.',
    type: 'string',
    maxLength: 64,
    minLength: 1
  },
  multiselect: oneOf({
    description: 'can the cashier select multiple addons or just a single addon.',
    type: 'boolean'
  }),
  max_selected: oneOf([
    {
      description: 'how many addons can there be selected. Only applicable if multiselect is selected. use -1 for unlimited.',
      type: 'integer',
      minimum: 1
    },
    {
      description: 'how many addons can there be selected. Only applicable if multiselect is selected. use -1 for unlimited.',
      type: 'integer',
      minimum: -1,
      maximum: -1
    }
  ]),
  skippable: oneOf({
    description: 'can the cashier skip this addon group or if he must select an addon',
    type: 'boolean'
  }),
  active: {
    description: 'Soft disable or enabled this product addon group.',
    type: 'boolean',
    default: true
  },
  deleted: {
    description: 'Soft delete this product addon group.',
    type: 'boolean',
    default: false
  }
}
