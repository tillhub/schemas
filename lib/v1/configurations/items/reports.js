const { anyOf } = require('../../../helpers/payload-or-null')

module.exports = {
  type: 'object',
  patternProperties: {
    '^[a-zA-Z0-9_]+$': {
      type: 'object',
      properties: {
        delimiter: anyOf({
          type: 'string',
          description: 'The delimiter used in the CSV file',
          enum: ['comma', 'semicolon']
        }),
        format: anyOf({
          type: 'string',
          description: 'The format of the Report file',
          enum: ['csv', 'xls']
        }),
        enclosure: anyOf({
          type: 'string',
          description: 'The enclosure used in the CSV file',
          enum: ['single', 'double']
        }),
        show_summary: anyOf({
          type: 'boolean'
        }),
        show_column_name: anyOf({
          description: 'The header of the report',
          type: 'boolean'
        }),
        email: anyOf({
          type: 'string'
        }),
        filter: anyOf({
          type: 'object'
        }),
        is_recurring: anyOf({
          type: 'boolean'
        }),
        recurring_cycle: anyOf({
          type: 'string',
          description: 'The recurring cycle of the report',
          enum: ['weekly', 'daily', 'monthly']
        }),
        recurring_on: anyOf({
          type: 'number',
          description: 'The recurring day of the report'
        }),
        column_selection: anyOf({
          type: 'string',
          description: 'The column selection of the report',
          enum: ['current_view', 'all']
        })
      }
    }
  }
}
