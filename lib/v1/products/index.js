const ext = require('./ext')
const base = require('./base')
const customizationsBase = require('./customizations').base
const priceBookBase = require('./prices/book').base
const priceBookEntryBase = require('./prices/book/entry').base
const commonResponse = require('../../common/response')

module.exports.create = {
  request: require('./create.request'),
  response: require('./create.response')
}

module.exports.update = {
  request: require('./update.request'),
  response: require('./update.response')
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
    },
    response: {
      $id: 'https://schemas.tillhub.com/v1/products.ext.create.response.schema.json',
      $schema: 'http://json-schema.org/draft-07/schema#',
      ...commonResponse({ resultItems: {
        additionalProperties: false,
        type: 'object',
        properties: { ...base, ...ext }
      } })
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
    },
    response: {
      $id: 'https://schemas.tillhub.com/v1/products.ext.update.response.schema.json',
      $schema: 'http://json-schema.org/draft-07/schema#',
      ...commonResponse({ resultItems: {
        additionalProperties: false,
        type: 'object',
        properties: { ...base, ...ext }
      } })
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
    },
    entry: {
      create: {
        request: {
          $id: 'https://schemas.tillhub.com/v1/products.prices.book.entry.create.request.schema.json',
          $schema: 'http://json-schema.org/draft-07/schema#',
          additionalProperties: false,
          type: 'object',
          required: [
            'price_book',
            'product'
          ],
          properties: {
            ...priceBookEntryBase
          }
        }
      },
      update: {
        request: {
          $id: 'https://schemas.tillhub.com/v1/products.prices.book.entry.update.request.schema.json',
          $schema: 'http://json-schema.org/draft-07/schema#',
          additionalProperties: false,
          type: 'object',
          required: [],
          properties: {
            ...priceBookEntryBase
          }
        }
      }
    }
  }
}

module.exports.bulk = {
  update: {
    request: {
      $id: 'https://schemas.tillhub.com/v1/products.bulk.update.request.schema.json',
      $schema: 'http://json-schema.org/draft-07/schema#',
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        required: [
          'id'
        ],
        properties: {
          id: {
            type: 'string',
            format: 'uuid'
          },
          ...base,
          ...ext
        }
      }
    }
  }
}
