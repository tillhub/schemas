const base = require('./base')
const create = require('./create')
const read = require('./read')
const update = require('./update')
const event = require('./event')
const notesCreateRequest = require('./notes').create
const ext = require('./ext')

module.exports = {
  create,
  read,
  update,
  event,
  ext
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
        anyOf: [{
          required: [
            'firstname'
          ]
        }, {
          required: [
            'lastname'
          ]
        }],
        required: []
      }
    }
  }
}
