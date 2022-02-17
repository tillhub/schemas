const { oneOf } = require('../../helpers/payload-or-null')
const baseObject = require('../../common/base')
const commonResponse = require('../../common/response')

const base = require('./base')
const create = require('./create')
const update = require('./update')
const notes = require('./notes').base

const extended = {
  analytics: require('./properties/anaylytics'),
  notes: oneOf({
    type: 'array',
    items: {
      ...notes
    }
  })
}

module.exports = {
  create: {
    request: {
      $id: 'https://schemas.tillhub.com/v0/customers.ext.create.request.schema.json',
      $schema: 'http://json-schema.org/draft-07/schema#',
      additionalProperties: false,
      type: 'object',
      required: create.request.required,
      properties: {
        ...base,
        ...extended
      }
    },
    response: {
      $id: 'https://schemas.tillhub.com/v0/customers.ext.create.response.schema.json',
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
  },
  update: {
    request: {
      $id: 'https://schemas.tillhub.com/v0/customers.ext.update.request.schema.json',
      $schema: 'http://json-schema.org/draft-07/schema#',
      additionalProperties: false,
      type: 'object',
      required: update.request.required,
      properties: {
        ...base,
        ...extended
      }
    },
    response: {
      $id: 'https://schemas.tillhub.com/v0/customers.ext.update.response.schema.json',
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
}
