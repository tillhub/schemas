const { oneOf } = require('../../../../helpers/payload-or-null')

module.exports = {
  product: {
    description: 'The reference to the actual product',
    type: 'string',
    format: 'uuid'
  },
  name: oneOf({
    description: 'Product name',
    type: 'string',
    maxLength: 512
  }),
  branches: oneOf({
    type: 'array',
    items: {
      type: 'string',
      format: 'uuid'
    }
  }),
  branch_groups: oneOf({
    type: 'array',
    items: {
      type: 'string',
      format: 'uuid'
    }
  }),
  description: oneOf({
    description: 'Product name',
    type: 'string',
    maxLength: 4096
  }),
  summary: oneOf({
    description: 'Product name',
    type: 'string',
    maxLength: 1024
  }),
  default_tile_color: oneOf({
    description: 'Product name',
    type: 'string',
    maxLength: 50
  }),
  active: {
    type: 'boolean',
    default: true
  },
  deleted: {
    type: 'boolean',
    default: false
  }
}
