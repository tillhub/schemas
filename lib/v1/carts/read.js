const baseObject = require('../../common/base')
const commonResponse = require('../../common/response')
const { oneOf } = require('../../helpers/payload-or-null')
const base = require('./base')

const override = {
  customer: {
    description: 'Customer ID or customer data (in case when "embed=[customer]" presented query parameters) cart belongs to',
    example: '55ec2da5-f9a4-4868-8f00-65ae0804a9d3',
    ...oneOf([{
      type: 'string',
      format: 'uuid'
    }, {
      type: 'object'
    }])
  }
}

const extended = { ...base, ...override }

module.exports = {
  all: {
    response: {
      $id: 'https://schemas.tillhub.com/v1/carts.read.all.response.schema.json',
      $schema: 'http://json-schema.org/draft-07/schema#',
      ...commonResponse({
        resultItems: {
          type: 'object',
          additionalProperties: false,
          properties: {
            ...baseObject(),
            ...extended
          }
        }
      })
    }
  },
  one: {
    response: {
      $id: 'https://schemas.tillhub.com/v1/carts.read.one.response.schema.json',
      $schema: 'http://json-schema.org/draft-07/schema#',
      ...commonResponse({
        resultItems: {
          type: 'object',
          additionalProperties: false,
          properties: {
            ...baseObject(),
            ...extended
          }
        }
      })
    }
  }
}
