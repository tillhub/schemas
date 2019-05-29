const { oneOf } = require('../../helpers/payload-or-null')
const safe = require('../safes/default-response')
const bank = require('../expense_accounts/default-response')
const base = require('./base')

const modifiedBase = {
  ...base,
  transfer_value: oneOf({
    type: 'number',
    description: 'Amount that is being transferred from origin to destination',
    multipleOf: 0.01,
    minimum: 0
  }),
  currency: oneOf({
    type: 'string',
    description: 'The three letter [ISO currency](https://en.wikipedia.org/wiki/ISO_4217) of this item.',
    example: 'EUR',
    minLength: 3,
    maxLength: 3
  })
}

module.exports = {
  ...modifiedBase,
  id: {
    type: 'string',
    format: 'uuid'
  },
  created_at: {
    type: 'string',
    format: 'date-time'
  },
  old: oneOf({
    type: 'object',
    description: 'The origin and destination objects as jsonb BEFORE the transfer happened. Will be supplied from within database pg transaction.',
    additionalProperties: false,
    properties: {
      from: {
        type: 'object',
        description: 'The origin object (i.e. safe) BEFORE the transfer happened',
        additionalProperties: false,
        properties: safe
      },
      to: {
        description: 'The destination object (i.e. safe or bank) BEFORE the transfer happened',
        oneOf: [
          {
            type: 'object',
            additionalProperties: false,
            properties: safe
          },
          {
            type: 'object',
            additionalProperties: true, // additional props true as defined in expense_accounts.update.response.schema.json
            properties: {
              ...bank,
              type: {
                type: 'string',
                enum: [
                  'bank'
                ]
              }
            }
          }
        ]
      }
    }
  }),
  new: oneOf({
    type: 'object',
    description: 'The origin and destination objects as jsonb AFTER the transfer happened. Will be supplied from within database pg transaction.',
    additionalProperties: false,
    properties: {
      from: {
        type: 'object',
        description: 'The origin object (i.e. safe) AFTER the transfer happened',
        additionalProperties: false,
        properties: safe
      },
      to: {
        description: 'The destination object (i.e. safe or bank) AFTER the transfer happened',
        oneOf: [
          {
            type: 'object',
            additionalProperties: false,
            properties: safe
          },
          {
            type: 'object',
            additionalProperties: true, // additional props true as defined in expense_accounts.update.response.schema.json
            properties: {
              ...bank,
              type: {
                type: 'string',
                enum: [
                  'bank'
                ]
              }
            }
          }
        ]
      }
    }
  }),
  transaction_id: {
    type: 'string',
    description: 'A unique id given to all the logs belonging to one transaction/transfer. Will be supplied from within database pg transaction.',
    format: 'uuid'
  },
  operation: {
    type: 'string',
    description: 'Type of operation of this transfer. Will be supplied from within database pg transaction.',
    enum: [
      'start',
      'stop',
      'book',
      'error'
    ]
  },
  reason: oneOf({
    type: 'string',
    description: 'Reason supplied from within database in case the pg transaction errored out.'
  })
}
