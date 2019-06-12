const notesBase = {
  created_at: {
    type: 'string',
    format: 'date-time'
  },
  updated_at: {
    type: 'string',
    format: 'date-time'
  },
  id: {
    type: 'string',
    format: 'uuid'
  }
}

const base = {
  oneOf: [
    {
      type: 'object',
      required: [
        'type',
        'payload'
      ],
      properties: {
        ...notesBase,
        type: {
          type: 'string',
          enum: [
            'text'
          ]
        },
        payload: {
          type: 'string',
          maxLength: 16384
        }
      }
    }
  ]
}

module.exports.base = base

module.exports.create = {
  oneOf: [
    {
      type: 'object',
      required: [
        'type',
        'payload'
      ],
      properties: {
        type: {
          type: 'string',
          enum: [
            'text'
          ]
        },
        payload: {
          type: 'string',
          maxLength: 16384
        }
      }
    }
  ]
}
