const { oneOf } = require('../../helpers/payload-or-null')

module.exports = {
  insert_id: {
    description: 'Sequential customer index',
    type: 'integer'
  },
  customer_group: {
    description: 'The group of customer',
    ...oneOf({
      type: 'string'
    })
  },
  price_list: {
    description: 'Price list',
    ...oneOf({
      type: 'object'
    })
  },
  delegated_to: {
    description: 'Entries customer delegated to',
    ...oneOf({
      type: 'array',
      items: {
        type: 'string'
      }
    })
  },
  owner: {
    description: 'Owner',
    ...oneOf({
      type: 'string'
    })
  }
}
