module.exports = {
  $id: 'https://schemas.tillhub.com/v1/transactions.query.questionnaire.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  type: 'object',
  required: [
  ],
  properties: {
    format: {
      type: 'string',
      enum: ['csv', 'json'],
      description: 'Output format. Defaults to csv.'
    },
    date_start: {
      type: 'string',
      format: 'date-time',
      description: 'Include transactions from this date/time (inclusive). ISO 8601.'
    },
    date_end: {
      type: 'string',
      format: 'date-time',
      description: 'Include transactions before this date/time (exclusive). ISO 8601.'
    },
    filename_prefix: {
      type: 'string',
      minLength: 1,
      description: 'Filename prefix for CSV export.'
    },
    export_map: {
      type: 'object',
      description: 'Optional export field mapping for CSV.',
      properties: {
        fields: {
          type: 'object'
        }
      }
    }
  }
}
