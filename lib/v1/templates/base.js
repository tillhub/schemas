module.exports.options = {
  type: 'object',
  additionalProperties: false,
  properties: {
    title: {
      type: 'string',
      maxLength: 32
    },
    logo: {
      type: 'string'
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
              type: 'boolean'
            }
          }
        },
        local: {
          type: 'object',
          additionalProperties: false,
          properties: {
            enabled: {
              type: 'boolean'
            }
          }
        }
      }
    },
    font_color: {
      type: 'string',
      pattern: '^#[0-9a-fA-F]{3,6}$'
    },
    font: {
      type: 'string',
      enum: [
        'Open Sans',
        'arial',
        'monospace'
      ]
    },
    paper_size: {
      type: 'string',
      enum: [
        'A4',
        'letter'
      ]
    },
    row_highlight: {
      type: 'boolean'
    }
  }
}

module.exports.base = {
  name: {
    oneOf: [
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
  active: {
    type: 'boolean'
  },
  deleted: {
    type: 'boolean'
  }
}
