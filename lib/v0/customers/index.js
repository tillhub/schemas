const ext = require('./ext')
const base = require('./base')

const createRequest = require('./create.request')
const updateRequest = require('./update.request')

module.exports.create = {
  request: createRequest
}

module.exports.update = {
  request: updateRequest
}

module.exports.ext = {
  create: {
    request: {
      $id: 'https://schemas.tillhub.com/v0/customers.ext.create.request.schema.json',
      $schema: 'http://json-schema.org/draft-07/schema#',
      additionalProperties: false,
      type: 'object',
      required: createRequest.required,
      properties: {
        ...base,
        ...ext
      }
    }
  },
  update: {
    request: {
      $id: 'https://schemas.tillhub.com/v0/customers.ext.update.request.schema.json',
      $schema: 'http://json-schema.org/draft-07/schema#',
      additionalProperties: false,
      type: 'object',
      required: updateRequest.required,
      properties: {
        ...base,
        ...ext
      }
    }
  }
}
