const { oneOf } = require('../../helpers/payload-or-null')

const instantCheckoutPayload = {
  description: 'Specific description of the instant product checkout function. Only the default tax-option will be used. Setting a payment is optional.',
  additionalProperties: false,
  type: 'object',
  required: [
    'products'
  ],
  properties: {
    products: {
      type: 'array',
      minItems: 1,
      items: {
        type: 'object',
        description: 'The applicable Tillhub product resource.',
        additionalProperties: false,
        properties: {
          product: {
            type: 'string',
            format: 'uuid',
            description: 'The Tillhub product resource reference ID.',
            example: '43847a66-97dc-4ac2-8e8a-c44920e1f22f'
          },
          qty: {
            type: 'number',
            description: 'The quantity of this item/product.',
            example: '100',
            minimum: -32767,
            maximum: 32767,
            multipleOf: 0.001
          }
        }
      }
    },
    discount: {
      default: null,
      ...oneOf({
        type: 'string',
        format: 'uuid',
        description: 'The Tillhub discount resource reference ID.',
        example: 'bd7d8a90-83d1-4d53-8659-b205b409d6e1'
      })
    },
    payment_option: {
      default: null,
      ...oneOf({
        type: 'string',
        format: 'uuid',
        description: 'The Tillhub payment option resource reference ID. Can be used to trigger a payment directly',
        example: 'bd7d8a90-83d1-4d53-8659-b205b409d6e1'
      })
    }
  }
}

const configurationProperties = {
  description: {
    oneOf: [
      {
        type: 'string',
        minLength: 1,
        maxLength: 128
      },
      {
        type: 'null'
      }
    ]
  },
  resources: {
    description: 'Store static resources e.g. products that this function will be bound to.',
    oneOf: [
      {
        type: 'array',
        items: {
          additionalProperties: false,
          type: 'object',
          properties: {
            type: {
              description: 'Type of the Tillhub resource.',
              type: 'string',
              enum: ['product', 'discount', 'voucher_action', 'customer']
            },
            object_id: {
              description: 'Identifier of the Tillhub resource.',
              type: 'string',
              format: 'uuid'
            }
          }
        }
      },
      {
        type: 'null'
      }
    ]
  },
  images: {
    description: 'Images to be used as thumbnail etc.',
    oneOf: [
      {
        type: 'object',
        additionalProperties: false,
        properties: {
          'original': oneOf({
            type: 'string',
            format: 'uri'
          }, { default: null }),
          '1x': oneOf({
            type: 'string',
            format: 'uri'
          }, { default: null }),
          '2x': oneOf({
            type: 'string',
            format: 'uri'
          }, { default: null }),
          '3x': oneOf({
            type: 'string',
            format: 'uri'
          }, { default: null }),
          lia_1x: oneOf({
            type: 'string',
            format: 'uri'
          }, { default: null }),
          lia_2x: oneOf({
            type: 'string',
            format: 'uri'
          }, { default: null }),
          lia_3x: oneOf({
            type: 'string',
            format: 'uri'
          }, { default: null }),
          square_1x: oneOf({
            type: 'string',
            format: 'uri'
          }, { default: null }),
          square_2x: oneOf({
            type: 'string',
            format: 'uri'
          }, { default: null }),
          square_3x: oneOf({
            type: 'string',
            format: 'uri'
          }, { default: null }),
          avatar: {
            type: 'string',
            format: 'uri'
          }
        }
      },
      {
        type: 'null'
      }
    ]
  }
}

module.exports = {
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
  runtime: {
    description: 'Define where this function is runnable.',
    type: 'string',
    enum: [
      'pos',
      'nodejs8x',
      'python27'
    ]
  },
  type: {
    description: 'Resource type that will drive runtime specific behaviour. Indicates whether this function needs ingress or egress.',
    type: 'string',
    enum: [
      'pubsub',
      'http',
      'local'
    ]
  },
  function: {
    description: 'Source code for this function, if applies.',
    oneOf: [
      {
        type: 'string',
        minLength: 1,
        maxLength: 10240
      },
      {
        type: 'null'
      }
    ]
  },
  topic: {
    description: 'Topic for this function, if applies.',
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
  handler: {
    description: 'Define which function specific handler to use, if a function has more than one handler, if applies.',
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
  deps: {
    description: 'Installable dependencies for this function, if applies.',
    oneOf: [
      {
        type: 'string',
        minLength: 1,
        maxLength: 5120
      },
      {
        type: 'null'
      }
    ]
  },
  client_id: {
    type: 'string',
    maxLength: 128
  },
  active: {
    type: 'boolean'
  },
  deleted: {
    type: 'boolean'
  },
  configuration: {
    description: 'Function configuration that e.g. drives specific local client behaviour',
    type: 'object',
    required: [
      'class'
    ],
    properties: {
      // not necessary for validation, as it is included in the if-else conditional, but rather for documentation purposes
      class: {
        type: 'string',
        description: 'Define which e.g. client local function implementation to use.',
        enum: [
          'instant_checkout',
          'add_to_cart'
        ]
      }
    },
    if: {
      properties: {
        class: {
          type: 'string',
          enum: [
            'instant_checkout',
            'add_to_cart'
          ]
        }
      }
    },
    then: {
      properties: {
        ...configurationProperties,
        payload: {
          ...oneOf(instantCheckoutPayload)
        }
      }
    },
    else: false // further if-else statements add in here, as a nested prop
  }
}
