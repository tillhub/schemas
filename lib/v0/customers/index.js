const ext = require('./ext')
const base = require('./base')

const createRequest = require('./create.request')
const updateRequest = require('./update.request')
const notesCreateRequest = require('./notes').create

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
        ...ext.base
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
        ...ext.base
      }
    }
  }
}
module.exports.notes = {
  create: {
    request: {
      $id: 'https://schemas.tillhub.com/v0/customers.notes.create.request.schema.json',
      $schema: 'http://json-schema.org/draft-07/schema#',
      additionalProperties: false,
      type: 'object',
      ...notesCreateRequest
    }
  }
}

module.exports.bulk = {
  create: {
    request: {
      $id: 'https://schemas.tillhub.com/v0/customers.bulk.create.request.schema.json',
      $schema: 'http://json-schema.org/draft-07/schema#',
      type: 'array',
      items: {
        additionalProperties: false,
        type: 'object',
        properties: {
          ...base
        },
        anyOf: [
          {
            required: [
              'firstname'
            ]
          },
          {
            required: [
              'lastname'
            ]
          }
        ],
        required: []
      }
    }
  }
}
