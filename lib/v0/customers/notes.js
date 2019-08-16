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
        },
        client_id: {
          anyOf: [
            {
              type: 'string',
              maxLength: 128
            },
            {
              type: 'null'
            }
          ]
        },
        date: {
          anyOf: [
            {
              type: 'string',
              format: 'date-time'
            },
            {
              type: 'null'
            }
          ]
        }
      }
    }
  ]
}

module.exports.base = base

module.exports.create = {
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
    },
    client_id: {
      anyOf: [
        {
          type: 'string',
          maxLength: 128
        },
        {
          type: 'null'
        }
      ]
    },
    date: {
      anyOf: [
        {
          type: 'string',
          format: 'date-time'
        },
        {
          type: 'null'
        }
      ]
    }
  }
}
