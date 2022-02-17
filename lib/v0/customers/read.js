const { oneOf } = require('../../helpers/payload-or-null')
const baseObject = require('../../common/base')
const commonResponse = require('../../common/response')
const base = require('./base')

const extended = {
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

module.exports.all = {
  response: {
    $id: 'https://schemas.tillhub.com/v0/customers.read.all.response.schema.json',
    $schema: 'http://json-schema.org/draft-07/schema#',
    additionalProperties: false,
    ...commonResponse({
      resultItems: {
        type: 'object',
        additionalProperties: false,
        properties: {
          ...baseObject(),
          ...base,
          ...extended
        }
      }
    }, { hasCursor: true })
  }
}

module.exports.one = {
  response: {
    $id: 'https://schemas.tillhub.com/v0/customers.read.one.response.schema.json',
    $schema: 'http://json-schema.org/draft-07/schema#',
    additionalProperties: false,
    ...commonResponse({
      resultItems: {
        type: 'object',
        additionalProperties: false,
        properties: {
          ...baseObject(),
          ...base,
          ...extended
        }
      }
    })
  }
}
