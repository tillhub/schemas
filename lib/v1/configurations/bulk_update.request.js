const base = require('./base')

// Allow only section keys similar to create, excluding meta fields
const disallowedKeys = new Set(['name', 'client_id', 'owner', 'level', 'created_at', 'updated_at'])
const allowedSectionKeys = Object.keys(base).filter((k) => !disallowedKeys.has(k))

module.exports = {
  $id: 'https://schemas.tillhub.com/v1/configurations.bulk_update.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  type: 'object',
  required: ['configurations'],
  properties: {
    configurations: {
      type: 'array',
      minItems: 1,
      items: {
        type: 'object',
        // Accept only known section keys (from base) besides id/owner; each section value must be an object
        additionalProperties: { type: 'object' },
        propertyNames: {
          enum: ['id', 'owner', ...allowedSectionKeys]
        },
        required: ['id'],
        properties: {
          id: { type: 'string', format: 'uuid' },
          owner: { type: 'string', format: 'uuid' }
        }
      }
    }
  }
}
