const ext = require('./ext')
const base = require('./base')
const customizationsBase = require('./customizations').base
const priceBookBase = require('./prices/book').base

module.exports.create = require('./create')
module.exports.update = {
  request: require('./update.request')
}

module.exports.ext = {
  create: {
    request: {
      $id: 'https://schemas.tillhub.com/v1/products.ext.create.request.schema.json',
      $schema: 'http://json-schema.org/draft-07/schema#',
      additionalProperties: false,
      type: 'object',
      required: [
        'name',
        'account',
        'tax',
        'type'
      ],
      properties: {
        ...base,
        ...ext
      }
    }
  },
  update: {
    request: {
      $id: 'https://schemas.tillhub.com/v1/products.ext.update.request.schema.json',
      $schema: 'http://json-schema.org/draft-07/schema#',
      additionalProperties: false,
      type: 'object',
      required: [

      ],
      properties: {
        ...base,
        ...ext
      }
    }
  }
}

module.exports.customizations = {
  create: {
    request: {
      $id: 'https://schemas.tillhub.com/v1/products.customizations.create.request.schema.json',
      $schema: 'http://json-schema.org/draft-07/schema#',
      additionalProperties: false,
      type: 'object',
      required: [
        'product'
      ],
      properties: {
        ...customizationsBase
      }
    }
  },
  update: {
    request: {
      $id: 'https://schemas.tillhub.com/v1/products.customizations.update.request.schema.json',
      $schema: 'http://json-schema.org/draft-07/schema#',
      additionalProperties: false,
      type: 'object',
      required: [

      ],
      properties: {
        ...customizationsBase
      }
    }
  }
}

module.exports.prices = {
  book: {
    create: {
      request: {
        $id: 'https://schemas.tillhub.com/v1/products.prices.book.create.request.schema.json',
        $schema: 'http://json-schema.org/draft-07/schema#',
        additionalProperties: false,
        type: 'object',
        required: [
          'product'
        ],
        properties: {
          ...priceBookBase
        }
      }
    },
    update: {
      request: {
        $id: 'https://schemas.tillhub.com/v1/products.prices.book.update.request.schema.json',
        $schema: 'http://json-schema.org/draft-07/schema#',
        additionalProperties: false,
        type: 'object',
        required: [],
        properties: {
          ...priceBookBase
        }
      }
    }
  }
}
