const baseObject = require('../../common/base')
const commonResponse = require('../../common/response')
const commonQuery = require('../../common/query')
const combinationSchema = require('./combination_schema')
const layoutSchema = require('./layout_schema')
const availableTables = require('./available_tables')

const sharedSchema = {
  name: {
    type: 'string',
    minLength: 1
  },
  location: {
    type: 'string',
    format: 'uuid'
  },
  gridColumnCount: {
    type: 'number'
  },
  active: {
    type: 'boolean',
    default: false
  }
}

module.exports.all = {
  query: {
    $id: 'https://schemas.tillhub.com/v1/table_layout.read.all.query.schema.json',
    ...commonQuery({
      standard: ['start', 'active', 'deleted'],
      additional: {
        q: {
          description: 'Search layouts by name matching a given string',
          example: 'there',
          type: 'string'
        },
        locations: {
          description: 'Array of UUID representing locations',
          example: ['25812497-4559-458c-ab0e-faa93e513d3e'],
          type: 'array',
          items: {
            type: 'string',
            format: 'uuid'
          }
        },
        include_layout: {
          description: 'The option to include or omit the layout field from the response',
          example: 'true',
          type: 'string',
          enum: ['true', 'false']
        },
        start: {
          description: 'The start date and time of the period to query',
          example: '2025-01-01T00:00:00Z',
          type: 'string',
          format: 'date-time'
        },
        active: {
          description: 'The active status of the layout',
          example: 'true',
          type: 'string',
          enum: ['true', 'false']
        },
        page: {
          description: 'The page number (for paginated output)',
          example: 3,
          type: 'integer',
          minimum: 1
        },
        limit: {
          description: 'The maximum amount of entries on page (for paginated output)',
          example: 50,
          type: 'integer',
          minimum: 1
        },
        cursor_field: {
          description: 'Cursor field and direction for sorting query by',
          example: '+name',
          type: 'string'
        }
      }
    })
  },
  response: {
    $id: 'https://schemas.tillhub.com/v1/table_layout.read.all.response.schema.json',
    $schema: 'http://json-schema.org/draft-07/schema#',
    additionalProperties: false,
    ...commonResponse({
      resultItems: {
        type: 'object',
        additionalProperties: false,
        properties: {
          ...baseObject(),
          ...sharedSchema,
          ...{
            tablesCount: {
              type: 'number'
            },
            combinationsCount: {
              type: 'number'
            },
            bookableTablesCount: {
              type: 'number'
            },
            bookableCombinationsCount: {
              type: 'number'
            }
          }
        }
      }
    })
  }
}

module.exports.one = {
  response: {
    $id: 'https://schemas.tillhub.com/v1/table_layout.read.one.response.schema.json',
    $schema: 'http://json-schema.org/draft-07/schema#',
    additionalProperties: false,
    ...commonResponse({
      resultItems: {
        type: 'object',
        additionalProperties: false,
        properties: {
          ...baseObject(),
          ...sharedSchema,
          ...{
            combinations: combinationSchema,
            layout: layoutSchema
          }
        }
      }
    })
  }
}

module.exports.available_tables = {
  response: {
    $id: 'https://schemas.tillhub.com/v1/table_layout.read.available_tables.response.schema.json',
    $schema: 'http://json-schema.org/draft-07/schema#',
    additionalProperties: false,
    ...commonResponse({
      resultItems: {
        type: 'object',
        additionalProperties: false,
        properties: {
          ...baseObject(),
          ...availableTables
        }
      }
    })
  }
}
