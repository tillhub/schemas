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
  }
}
