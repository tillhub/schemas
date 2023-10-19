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
    enforce_integer_quantities: oneOf({
      description: 'Specifies if only integer quantities are allowed -1, 1,2 etc. vs. decimal quantities like 1.62).',
      type: 'boolean',
      default: false
    }),
    item_merge_policy: oneOf({
      description: 'Specifies how newly added products get merged into existing cart items.',
      type: 'string',
      'enum': [
        'none', // do not merge (legacy behavior)
        'full' // always try to merge
      ],
      default: 'full'
    }),
    sale: oneOf({
      type: 'object',
      description: 'Specifies conditions on a regular sale.',
      additionalProperties: false,
      properties: {
        items: oneOf({
          type: 'object',
          additionalProperties: false,
          properties: {
            allow_negative_quantity: oneOf({
              description: 'Specifies if items can have negative quantities when doing a regular sale.',
              type: 'boolean',
              default: true
            })
          }
        })
      }
    }),
    refund: oneOf({
      type: 'object',
      additionalProperties: false,
      description: 'Specifies conditions on a refund.',
      properties: {
        immutable: oneOf({
          description: 'In case of refund - specifies if modicications are forbidden',
          type: 'boolean',
          default: false
        }) // ,
        // *
        // * ### the follwing is already defined and used from 'configurations.settings.revision_safety.allow_editing_refund_items' ###
        // *
        // items: oneOf({
        //  type: 'object',
        //  additionalProperties: false,
        //  properties: {
        //    allow_editing: oneOf({
        //      description: 'In case of refund items - specifies if quantity and price can be edited',
        //      type: 'boolean',
        //      default: false
        //    })
        //  }
        // })
      }
    })
  }
})
