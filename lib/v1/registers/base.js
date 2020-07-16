
const { oneOf } = require('../../helpers/payload-or-null')

module.exports = {
  name: {
    anyOf: [
      {
        type: 'string',
        maxLength: 32,
        minLength: 1
      },
      {
        type: 'null'
      }
    ]
  },
  description: {
    anyOf: [
      {
        type: 'string',
        maxLength: 128,
        minLength: 1
      },
      {
        type: 'null'
      }
    ]
  },
  shop: {
    anyOf: [
      {
        type: 'string',
        maxLength: 64,
        minLength: 1
      },
      {
        type: 'null'
      }
    ]
  },
  device_id: {
    anyOf: [
      {
        type: 'string',
        maxLength: 128,
        minLength: 1
      },
      {
        type: 'null'
      }
    ]
  },
  metadata: {
    anyOf: [
      {
        type: 'object'
      },
      {
        type: 'null'
      }
    ]
  },
  custom_ids: {
    anyOf: [
      {
        type: 'object'
      },
      {
        type: 'null'
      }
    ]
  },
  branch: {
    anyOf: [
      {
        type: 'string'
      },
      {
        type: 'null'
      }
    ]
  },
  cost_center: {
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
  register_number: {
    anyOf: [
      {
        type: 'number'
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
  },
  device_configuration: {
    oneOf: [
      {
        type: 'object',
        additionalProperties: false,
        properties: {
          device_token: {
            type: 'string'
          },
          bundle_id: {
            type: 'string'
          },
          network: {
            type: 'object',
            additionalProperties: false,
            properties: {
              ip: {
                type: 'string'
              }
            },
            required: ['ip']
          },
          fiscal_signing: {
            description: 'Necessary authentication data for financial signing systems. This is an opt-in feature.',
            anyOf: [
              {
                type: 'object',
                description: 'existing configuartion object for Austria: Fiskaltrust (this might still be read from branches)',
                properties: {
                  // TODO: fill from current state
                }
              },
              {
                type: 'object',
                description: 'Configuration object for Germany: TSE Epson',
                properties: {
                  client_id: {
                    type: 'string',
                    description: 'ID of the register according to the signing unit. This is NOT the Tillhub register UUID!',
                    example: '955002-00',
                    maxLength: 30
                  },
                  unit: {
                    ...oneOf({
                      type: 'string',
                      description: 'ID of the signing unit (Epson.serialNumber) - should be updated after client is initialized',
                      example: 'soTFFH9xiZP9JYWCPRgvpw6xhZ3ttbWDjfS4ky4AMEk='
                    })
                  },
                  target: {
                    ...oneOf({
                      type: 'string',
                      description: 'TSE target address (MAC) - should be updated after client is initialized',
                      example: 'TCPS:38:9D:92:FC:2B:2A[local_TSE]'
                    })
                  },
                  secret_key: {
                    type: 'string',
                    default: 'EPSONKEY',
                    description: 'Secret key used to calculate the hash value for user/host authentication. The secret key must be registered (default value changed) after installation or when replacing the printer.',
                    example: 'THKSSKEY',
                    maxLength: 8,
                    minLength: 8
                  },
                  puk: {
                    type: 'string',
                    default: '123456',
                    description: 'PUK for unit',
                    example: '654321',
                    maxLength: 6,
                    minLength: 6
                  },
                  admin_pin: {
                    type: 'string',
                    default: '11111',
                    description: 'PIN for Admin privileges',
                    example: '12121',
                    maxLength: 5,
                    minLength: 5
                  },
                  time_admin_pin: {
                    type: 'string',
                    default: '22222',
                    description: 'PIN for TimeAdmin privileges',
                    example: '23232',
                    maxLength: 5,
                    minLength: 5
                  }
                }
              },
              {
                type: 'null'
              }
            ]
          }
        },
        required: ['device_token', 'bundle_id']
      },
      {
        type: 'null'
      }
    ]
  },
  devices: {
    type: 'array',
    items: {
      oneOf: [
        {
          type: 'object',
          additionalProperties: false,
          properties: {
            type: {
              type: 'string',
              enum: [
                'cfd',
                'printer'
              ]
            },
            public_key: {
              default: null,
              oneOf: [
                {
                  type: 'string',
                  maxLength: 4096
                },
                {
                  type: 'null'
                }
              ]
            },
            auth: {
              default: null,
              oneOf: [
                {
                  type: 'object',
                  additionalProperties: false,
                  properties: {
                    type: {
                      oneOf: [
                        {
                          type: 'string',
                          enum: [
                            'x.509'
                          ]
                        },
                        {
                          type: 'null'
                        }
                      ]
                    }
                  }
                },
                {
                  type: 'null'
                }
              ]
            },
            network: {
              type: 'object',
              additionalProperties: false,
              properties: {
                ip: {
                  oneOf: [
                    {
                      type: 'string',
                      format: 'ipv4'
                    },
                    {
                      type: 'string',
                      format: 'ipv6'
                    },
                    {
                      type: 'null'
                    }
                  ]
                },
                host: {
                  oneOf: [
                    {
                      type: 'string',
                      maxLength: 512
                    },
                    {
                      type: 'null'
                    }
                  ]
                },
                port: {
                  type: 'integer',
                  maximum: 65535,
                  minimum: 0
                },
                protocol: {
                  type: 'string',
                  enum: [
                    'http',
                    'https',
                    'tcp',
                    'udp'
                  ]
                }
              },
              required: ['ip', 'port', 'protocol']
            }
          },
          required: ['type', 'network']
        },
        {
          type: 'null'
        }
      ]
    }
  },
  default_favourite: {
    description: 'Define which favourite set to show as default in the POS.',
    anyOf: [
      {
        type: 'string',
        format: 'uuid'
      },
      {
        type: 'null'
      }
    ]
  },
  default_category_tree: {
    description: 'Define which category tree to use as default in the POS.',
    anyOf: [
      {
        type: 'string',
        format: 'uuid'
      },
      {
        type: 'null'
      }
    ]
  }
}
