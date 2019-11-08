const pick = require('just-pick')
const { oneOf } = require('../../helpers/payload-or-null')
const voucherBase = require('../vouchers/base')
const { voucherAction } = require('./items/action')
const { scanPrefix } = require('./items/scan_prefix')

const hook = {
  type: 'object',
  additionalProperties: false,
  required: [
    'endpoint',
    'method'
  ],
  properties: {
    endpoint: {
      type: 'string',
      description: 'The url of the cloud based function',
      example: 'https://us-central1-<project-id>.cloudfunctions.net/date'
    },
    method: oneOf({
      type: 'string',
      enum: [
        'GET',
        'POST',
        'PUT'
      ]
    }),
    auth: {
      type: 'object',
      additionalProperties: false,
      required: [
        'type'
      ],
      properties: {
        type: {
          type: 'string',
          enum: [
            'basic',
            'token',
            'bearer_token'
          ]
        },
        token: {
          type: 'string'
        },
        user: {
          type: 'string'
        }
      }
    }
  },
  example: {
    endpoint: 'https://us-central1-<project-id>.cloudfunctions.net/date',
    method: 'GET',
    auth: {
      type: 'basic',
      user: 'some_user_name_123123',
      token: 'abc123456789'
    }
  }
}

module.exports = {
  name: {
    type: 'string',
    example: 'Miles and More',
    minLength: 1,
    maxLength: 128
  },
  description: oneOf({
    type: 'string',
    minLength: 1,
    maxLength: 4096
  }),
  deleted: {
    type: 'boolean'
  },
  active: {
    type: 'boolean'
  },
  branches: oneOf({
    type: 'array',
    description: 'If defined then only these branches will be using this system. If not defined, there will be no restrictions on which branches can use this system.',
    minItems: 1,
    items: {
      type: 'string',
      format: 'uuid'
    }
  }),
  region: oneOf({
    type: 'string',
    description: 'The international format for regional sub category of a country e.g. a state or province.'
  }),
  country: oneOf({
    type: 'string',
    description: 'A country as ISO Alpha-2 code.',
    minLength: 2,
    maxLength: 2,
    pattern: '^[A-Z]{2}$'
  }),
  metadata: oneOf({
    type: 'object'
  }),
  hooks: oneOf({
    type: 'object',
    additionalProperties: false,
    properties: {
      get: {
        type: 'object',
        additionalProperties: false,
        properties: {
          incoming: oneOf({
            ...hook,
            description: 'This hook is intended for the case when a voucher is queried by voucher-code in the endpoint "/api/v0/vouchers/:voucher_id". This hook allows to modify the code before the query continues and it receives the code in the request body in the form of { code: "some string" }. The endpoint expects from the hook response a simple string, e.g. "123456abc".'
          }),
          outgoing: oneOf({
            ...hook,
            description: 'This hook is used in the endpoint "/api/v0/vouchers/:voucher_id" and is applied after the results returned from the database query and before they are returned to the caller. The hook receives the voucher in the request body in the format of { vouchers: [{ <voucherData> }] }. The response from the hook is expected to be an array of (voucher) objects.'
          })
        }
      }
    }
  }),
  increments: {
    description: 'Define a client side increment restriction. E.g. only allow a a voucher to be issued with 5 EUR minimum.',
    ...oneOf({
      type: 'array',
      items: {
        oneOf: [
          {
            type: 'object',
            additionalProperties: false,
            required: [
              'type',
              'currency',
              'value'
            ],
            properties: {
              currency: {
                type: 'string',
                minLength: 3,
                maxLength: 3
              },
              type: {
                type: 'string',
                enum: [
                  'amount'
                ]
              },
              value: {
                type: 'number',
                minimum: 0,
                maximum: 100000,
                multipleOf: 0.01
              }
            }
          }
        ]
      }
    })
  },
  actions: {
    description: 'Define actions that can e.g. be put on a tile.',
    ...oneOf({
      type: 'array',
      items: {
        description: 'Available actions for this system',
        ...voucherAction
      }
    })
  },
  scan_prefixes: {
    description: 'Define whether and now the POS should cut of a prefix from a scan to understand those vouchers.',
    ...oneOf({
      type: 'array',
      items: {
        description: 'Available scan prefixes for this system',
        ...scanPrefix
      }
    })
  },
  product: {
    description: 'The Tillhub product resource associated with this sytsem to e.g. sell a voucher.',
    ...oneOf({
      type: 'string',
      format: 'uuid',
      example: '43847a66-97dc-4ac2-8e8a-c44920e1f22f'
    })
  },
  external: {
    description: 'Make this voucher to follow external logic',
    type: 'boolean',
    default: false
  },
  external_system_type: {
    description: 'Define which voucher API implementation to follow',
    ...oneOf({
      type: 'string',
      enum: [
        'tillhub-voucher-api',
        'fleurop',
        'zalando'
      ]
    })
  },
  external_system_id: {
    description: 'Define here whether this voucher system is an external one and which ID it references at the provider. E.g. a Tillhub Account can talk to another one, but permissions and this reference need to be set.',
    default: null,
    ...oneOf({
      description: 'Additional parameter for external voucher systems, e.g. Fleurop Voucher Type specifier',
      type: 'string',
      maxLength: 128,
      example: '0023903408'
    })
  },
  templates: {
    description: 'Define attribute templates for vouchers that will be created from this system. Behaviour of vouchers can always be overriden.',
    ...oneOf({
      type: 'array',
      items: {
        description: 'Define voucher templates that can inherit attributes and be bound to e.g. creation actions.',
        type: 'object',
        additionalProperties: false,
        properties: {
          id: {
            type: 'string',
            format: 'uuid'
          },
          name: {
            type: 'string',
            minLength: 1,
            maxLength: 256
          },
          description: {
            ...oneOf({
              type: 'string',
              minLength: 1,
              maxLength: 4096
            })
          },
          attributes: {
            type: 'object',
            additionalProperties: false,
            description: 'Inheritable properties from Tillhub Vouchers',
            required: [
              'format',
              'format_type'
            ],
            properties: pick(voucherBase, [
              'format',
              'format_type',
              'amount_max',
              'amount',
              'increment_amount_minimum',
              'currency',
              'issuable',
              'reissuable',
              'comment',
              'expires_at',
              'customer',
              'title',
              'partial_redemption',
              'active',
              'bound_to',
              'namespace',
              'type',
              'regions',
              'limited_to_region',
              'refundable',
              'mutable',
              'exchange_for_cash',
              'restriction_single_transaction',
              'is_campaign',
              'product'
            ])
          }
        }
      }
    })
  }
}
