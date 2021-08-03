const { stripIndents } = require('common-tags')
const { oneOf } = require('../../../helpers/payload-or-null')
const countingDecision = require('../../../common/counting_decision')

module.exports = {
  aps: {
    type: 'object',
    additionalProperties: false,
    properties: {
      alert: {
        type: 'string'
      },
      badge: {
        type: 'integer',
        minimum: 0
      },
      sound: {
        type: 'string'
      },
      'content-available': {
        type: 'integer',
        enum: [0, 1],
        default: 1
      }
    },
    required: ['content-available'],
    default: {
      'content-available': 1
    }
  },
  data: {
    type: 'object',
    additionalProperties: false,
    properties: {
      command: {
        type: 'string',
        enum: ['send_logs', 'update_database']
      },
      ui: {
        type: 'boolean',
        default: true
      },
      args: {
        type: 'array',
        items: {
          type: 'string'
        }
      }
    },
    required: ['command', 'ui']
  },
  device_configuration: {
    type: 'object',
    additionalProperties: false,
    properties: {
      network: {
        type: 'object'
      },
      bundle_id: {
        type: 'string'
      },
      device_token: {
        type: 'string'
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
            'tse_epson'
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
              }
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
    required: ['bundle_id', 'device_token']
  },
  register_id: {
    type: 'string'
  },
  client_id: {
    type: 'string'
  }
}
