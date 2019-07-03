const { oneOf } = require('../../helpers/payload-or-null')

module.exports = {
  ...oneOf({
    type: 'array',
    additionalProperties: false,
    items: {
      anyOf: [
        {
          type: 'object',
          required: [
            'data',
            'type'
          ],
          additionalProperties: false,
          properties: {
            data: {
              oneOf: [
                {
                  type: 'string',
                  maxLength: 16384
                },
                {
                  type: 'null'
                }
              ]
            },
            caption: {
              ...oneOf({
                type: 'string',
                maxLength: 512
              })
            },
            type: {
              type: 'string',
              enum: [
                'qr'
              ]
            }
          }
        },
        {
          type: 'object',
          required: [
            'data',
            'type'
          ],
          additionalProperties: false,
          properties: {
            data: {
              oneOf: [
                {
                  type: 'string',
                  maxLength: 64
                },
                {
                  type: 'null'
                }
              ]
            },
            caption: {
              ...oneOf({
                type: 'string',
                maxLength: 512
              })
            },
            type: {
              type: 'string',
              enum: [
                'code128'
              ]
            }
          }
        },
        {
          type: 'object',
          required: [
            'data',
            'type'
          ],
          additionalProperties: false,
          properties: {
            data: {
              oneOf: [
                {
                  type: 'string',
                  minLength: 12,
                  maxLength: 3832
                },
                {
                  type: 'null'
                }
              ]
            },
            caption: {
              ...oneOf({
                type: 'string',
                maxLength: 512
              })
            },
            type: {
              type: 'string',
              enum: [
                'aztec'
              ]
            }
          }
        },
        {
          type: 'object',
          required: [
            'data',
            'type'
          ],
          additionalProperties: false,
          properties: {
            data: {
              oneOf: [
                {
                  type: 'string',
                  minLength: 13,
                  maxLength: 13
                },
                {
                  type: 'null'
                }
              ]
            },
            caption: {
              ...oneOf({
                type: 'string',
                maxLength: 512
              })
            },
            type: {
              type: 'string',
              enum: [
                'ean13'
              ]
            }
          }
        },
        {
          type: 'object',
          required: [
            'data',
            'type'
          ],
          additionalProperties: false,
          properties: {
            data: {
              oneOf: [
                {
                  type: 'string',
                  minLength: 8,
                  maxLength: 8
                },
                {
                  type: 'null'
                }
              ]
            },
            caption: {
              ...oneOf({
                type: 'string',
                maxLength: 512
              })
            },
            type: {
              type: 'string',
              enum: [
                'ean8'
              ]
            }
          }
        }
      ]
    }
  }, { default: null })
}
