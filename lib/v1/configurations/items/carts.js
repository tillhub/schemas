const { oneOf } = require('../../../helpers/payload-or-null')

module.exports = {
  type: 'object',
  properties: {
    clear_confirmation: oneOf({
      description: 'Specifies if clearing the cart must be confirmed.',
      type: 'boolean',
      default: true
    }),
    item_merge_policy: oneOf({
      description: 'Specifies how cart items should be merged.',
      type: 'string',
      'enum': [
        'none', // do not merge cart items when adding new products (legacy behavior)
        'full' // always merge new products into existing items when conditions are met
      ],
      default: 'full'
    })
  }
}
