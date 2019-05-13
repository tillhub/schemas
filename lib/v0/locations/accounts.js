module.exports = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      name: {
        anyOf: [
          {
            description: 'A custom name for a financial account.',
            type: 'string',
            minLength: 1,
            maxLength: 64
          },
          {
            type: 'null'
          }
        ]
      },
      location: {
        description: 'The specific Tillhub resource this account applies to (e.g. branch).',
        type: 'string',
        format: 'uuid',
        example: '936835f7-2d75-41d2-9001-38ed6e458328'
      },
      custom_id: {
        description: 'The custom financial account identifier e.g. an account number.',
        example: '1776',
        type: 'string',
        minLength: 1,
        maxLength: 64
      },
      cost_center: {
        anyOf: [
          {
            description: 'A custom cost center identifier.',
            example: '4321',
            type: 'string',
            minLength: 1,
            maxLength: 64
          },
          {
            type: 'null'
          }
        ]
      }
    }
  }
}
