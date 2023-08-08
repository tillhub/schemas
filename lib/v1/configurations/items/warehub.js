const { oneOf } = require('../../../helpers/payload-or-null')

module.exports = oneOf({
  type: 'object',
  properties: {
    product_match_required: oneOf({
      description: 'If true - allow only barcodes that match an existing product.',
      type: 'boolean',
      default: false
    })
  }
})
