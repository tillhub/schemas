const { stripIndents } = require('common-tags')
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
            description: stripIndents`
            Necessary authentication data for financial signing systems. This is an opt-in feature.

            NOTE: Depending on the respective configuration (transactions.signing.resource_type) this will be looked up
            here or on branch level (signing_configuration).
            `,
            oneOf: [
              {
                type: 'object',
                description: 'existing configuartion object for Austria: Fiskaltrust (this might still be read from branches)',
                properties: {
                  // TODO: fill from current state
                }
              },
              {
                type: 'object',
                description: 'Configuartion object for Germany: TSE Fiskaly',
                properties: {
                  // TODO: fill later
                }
              },
              {
                type: 'object',
                description: 'Configuration object for Germany: TSE Epson',
                properties: {
                  client_id: {
                    type: 'string',
                    description: 'ID of the register according to the signing unit. This is NOT the Tillhub register UUID!',
                    example: 'TillhubPOS_0012_0002',
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
