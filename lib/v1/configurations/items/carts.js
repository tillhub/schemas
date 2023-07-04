const { oneOf } = require('../../../helpers/payload-or-null')

module.exports = oneOf({
  type: 'object',
  additionalProperties: false,
  properties: {
    clear_confirmation: oneOf({
      description: 'Specifies if clearing the cart must be confirmed.',
      type: 'boolean',
      default: true
    }),
    item_merge_policy: oneOf({
      description: 'Specifies how newly added products get merged into existing cart items.',
      type: 'string',
      'enum': [
        'none', // do not merge (legacy behavior)
        'full' // always try to merge
      ],
      default: 'full'
    })
  }
})
