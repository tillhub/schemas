const { oneOf } = require('../../../helpers/payload-or-null')
module.exports = {
  type: 'object',
  properties: {
    clear_confirmation: oneOf({
       description: 'Specifies if clearing the cart must be confirmed.',
       type: 'boolean',
                default: true
              })
    },
   item_merge_policy: oneOf({
      description: 'Specifies how cart items should be merged.',
       type: 'string',
              'enum': [
                        'none', // present all carts together
                        'instant_checkout' // present carts separated by the instant_checkout flag value
                      ],
              default: 'none' // present all carts together
   })
  }
}
