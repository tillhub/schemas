const { stripIndents } = require('common-tags')
const { oneOf } = require('../../helpers/payload-or-null')

const countingDecision = require('../../common/counting_decision')

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
  type: {
    anyOf: [
      {
        type: 'string',
        enum: [
          'fullpos-mobile',
          'gastropos-mobile',
          'fullpos-stationary',
          'litepos-mobile'
        ]
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
    type: 'boolean',
    default: true
  },
  deleted: {
    description: 'Soft delete this register.',
    type: 'boolean',
    default: false
  },
  deleted_at: oneOf({
    description: 'The date when register was deleted.',
    example: '2023-04-05T16:06:04.849Z',
    type: 'string',
    format: 'date-time'
  }),
  is_mms: {
    description: 'The register belongs to MMS.',
    example: 'false',
    type: 'boolean',
    default: false
  },
  device_configuration: {
    anyOf: [
      {
        type: 'object',
        additionalProperties: false,
        properties: {
          device_token: {
            ...oneOf({
              type: 'string',
              description: 'The Apple Push Notification Service (APNS) token that can be used to send push notifications to the device',
              example: 'da6f9c820ca73df7680675134b64641f46520a0ee0e93b15b25cf131cb2e29f6'
            })
          },
          bundle_id: {
            ...oneOf({
              type: 'string',
              description: 'The bundle identifier of the client application',
              example: 'de.tillhub.tillhubstage'
            })
          },
          network: {
            ...oneOf({
              type: 'object',
              additionalProperties: false,
              properties: {
                ip: {
                  type: 'string',
                  description: 'The local IP-address of the client application',
                  example: '192.168.1.147'
                }
              },
              required: ['ip']
            })
          },
          counting_decisions: {
            ...oneOf({
              type: 'array',
              description: 'Reports a one-time decision about the register\'s counting numbers (set when initializing a safe storage, e.g. keychain)',
              items: {
                ...countingDecision
              }
            })
          },
          fiscal_signing_type: {
            ...oneOf({
              description: 'The fiscal signing type to use, e.g. Fiskaltrust in Austria or EposnTSE in Germany',
              type: 'string',
              enum: [
                'fiskaltrust',
                'tse_fiskaly',
                'tse_epson',
                'fr_NF525',
                'it_epson'
              ]
            })
          },
          fiscal_signing: {
            description: stripIndents`
            Necessary core or allowed authentication data for financial signing systems. This is an opt-in feature.

            NOTE: Depending on the respective configuration (transactions.signing.resource_type) this will be looked up
            here or on branch level (signing_configuration).
            `,
            anyOf: [
              {
                type: 'object',
                description: 'Configuration object for Germany: TSE Fiskaly',
                properties: {
                  tss_id: {
                    type: 'string',
                    description: 'UUID4 of the technical security system (TSS). Must be uniquely generated on the dashboard.',
                    example: 'cfb5afbb-dcce-4376-9152-6bb7ee01a0dd',
                    format: 'uuid'
                  },
                  tss_admin_puk: {
                    type: 'string',
                    description: 'PUK for setting PIN.',
                    example: '9076066923'
                  },
                  tss_admin_pin: {
                    type: 'string',
                    description: 'PIN for authentication of admin requests.',
                    example: '1234567890'
                  },
                  time_creation_s: {
                    type: 'integer',
                    description: 'The Unix epoch timestamp in seconds',
                    example: 1632384153
                  },
                  client_id: {
                    type: 'string',
                    description: 'UUID4 of the register according to the signing unit. Must be uniquely generated on the dashboard.',
                    example: 'cec990a1-34ca-447f-8f39-6128da8fdbf2',
                    format: 'uuid'
                  },
                  client_serial_number: {
                    type: 'string',
                    description: 'Prefix + generated UUID4 according to https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Publikationen/TechnischeRichtlinien/TR03153/TR-03153.pdf?__blob=publicationFile. Must be uniquely generated on the dashboard.',
                    example: 'ERS 84eba3e2-14d2-4e69-ab53-447676a0df1b'
                  },
                  api_key: {
                    type: 'string',
                    description: 'Per fiskaly account: key for their API',
                    example: 'test_dttfadyyenial79q8yga9ww0k_tillhub'
                  },
                  api_secret: {
                    type: 'string',
                    description: 'Per fiskaly account: secret for their API',
                    example: 'QmSgQtMNfm0uZjVedM1BvqGRIQ3D9wjclLYDZcXPZve'
                  },
                  api_version: {
                    ...oneOf({
                      description: 'Fiskaly account API version',
                      type: 'string',
                      enum: [
                        'v1',
                        'v2'
                      ],
                      default: 'v1'
                    })
                  },
                  base_url: {
                    ...oneOf({
                      type: 'string',
                      description: 'A custom Fiskaly API endpoint. If not set, the POS will use the version specific default endpoint.',
                      example: 'https://kassensichv-middleware.fiskaly.com/api/v2/',
                      default: null
                    })
                  },
                  client_timeout_ms: oneOf({
                    type: 'integer',
                    description: 'The timeout in milliseconds for the Fiskaly client component.',
                    minimum: 0,
                    maximum: 60000,
                    default: 5000
                  }),
                  smaers_timeout_ms: oneOf({
                    type: 'integer',
                    description: 'The timeout in milliseconds for the Fiskaly SMAERS component.',
                    minimum: 0,
                    maximum: 20000,
                    default: 3000
                  }),
                  debug_level: oneOf({
                    type: 'integer',
                    description: 'The granularity of a dedicated client side logfile. Valid debug levels are -1 (no output), 1 (errors only), 2 (errors+warnings) and 3 (errors+warnings+info).',
                    minimum: -1,
                    maximum: 3,
                    default: 2 // errors + warnings
                  })
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
                type: 'object',
                description: 'Configuration object for France: NF525',
                properties: {
                  enabled: {
                    type: 'boolean',
                    description: 'Activates the french signing process.',
                    default: true
                  }
                }
              },
              {
                type: 'object',
                description: 'Configuration object for Italy: Epson Fiscal Printer',
                properties: {
                  unit: {
                    ...oneOf({
                      type: 'string',
                      description: 'Eleven character ID of the signing unit (Epson.serialNumber) - should be updated after client is initialized',
                      example: '99IEB03890'
                    })
                  },
                  target: {
                    ...oneOf({
                      type: 'string',
                      description: 'IP address of the signing unit - should be updated after client is initialized',
                      example: '192.168.0.211'
                    })
                  }
                }
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
