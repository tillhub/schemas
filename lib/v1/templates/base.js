const options = {
  additionalProperties: false,
  type: 'object',
  properties: {
    title: {
      type: 'string',
      maxLength: 32
    },
    logo: {
      type: 'string',
      format: 'url'
    },
    main_text: {
      type: 'string',
      maxLength: 4096
    },
    attention: {
      type: 'string',
      maxLength: 16
    },
    addresses: {
      type: 'object',
      additionalProperties: false,
      properties: {
        self: {
          type: 'object',
          additionalProperties: false,
          properties: {
            enabled: {
              type: 'boolean',
              default: true
            }
          }
        },
        local: {
          type: 'object',
          additionalProperties: false,
          properties: {
            enabled: {
              type: 'boolean',
              default: true
            }
          }
        }
      }
    },
    font_color: {
      type: 'string',
      pattern: '/^#[0-9a-f]{3,6}$/i'
    },
    font: {
      type: 'string',
      enum: [
        'Open Sans'
      ]
    },
    paper_size: {
      type: 'string',
      enum: [
        'A4',
        'letter'
      ]
    }
  }
}

module.exports = {
  name: {
    oneof: [
      {
        type: 'string',
        minLength: 1,
        maxLength: 64
      },
      {
        type: 'null'
      }
    ]
  },
  type: {
    type: 'string',
    'enum': [
      'delivery_note_v1',
      'invoice_v1',
      'full_receipt_v1'
    ]
  },
  options: {
    oneof: [
      options,
      {
        type: 'null'
      }
    ]
  },
  active: {
    type: 'boolean'
  },
  deleted: {
    type: 'boolean'
  }
}
