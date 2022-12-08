const { anyOf, oneOf } = require('../../helpers/payload-or-null')
const locationType = require('../../common/location_type')

module.exports = {
  qty: anyOf({
    type: 'number',
    description: 'The quantity of this item/product.'
  }),
  product: anyOf({
    type: 'string',
    minLength: 1,
    maxLength: 64
  }),
  location: anyOf({
    type: 'string',
    description: 'Alphanumerical uuid of the location, e.g. branch or warehouse',
    minLength: 1,
    maxLength: 64
  }),
  location_type: anyOf(locationType),
  status: oneOf({
    type: 'string',
    'enum': [
      'available',
      'sold',
      'purchased',
      'reserved',
      'transit_outgoing',
      'transit_incoming',
      'delivered',
      'selected'
    ]
  }),
  metadata: oneOf({
    type: 'object'
  }),
  reasons: oneOf({
    description: 'Deprecated property. Use reason instead.',
    type: 'string',
    format: 'uuid'
  }),
  reason: oneOf({
    type: 'string',
    format: 'uuid'
  }),
  comments: oneOf({
    type: 'string',
    minLength: 1,
    maxLength: 2048
  })
}
