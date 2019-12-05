const { oneOf } = require('../../helpers/payload-or-null')
const scanPrefix = require('../voucher_systems/items/scan_prefix')

module.exports = {
  code: {
    description: 'The chosen or generated voucher code.',
    example: '1234 1234 1234',
    anyOf: [
      {
        type: 'string'
      },
      {
        type: 'null'
      }
    ]
  },
  format: {
    description: 'The visual format this voucher conforms to.',
    example: 'xxxx xxxx xxxx',
    type: 'string'
  },
  format_type: {
    description: 'Define which characters can be used during a voucher creation. E.g. numeric XXXX XXXX will be a voucher code with 8 random numbers divided by a space. The lookup on the voucher will be made on code and code_normalised equally (if defined).',
    type: 'string',
    'enum': [
      'numeric',
      'alphanumeric',
      'alphabetic'
    ]
  },
  amount: {
    description: 'The current value of this voucher.',
    example: '10.99',
    anyOf: [
      {
        type: 'number',
        minimum: 0
      },
      {
        type: 'null'
      }
    ]
  },
  amount_issued_at: {
    description: 'decimal type',
    example: '10.99',
    anyOf: [
      {
        type: 'number',
        minimum: 0
      },
      {
        type: 'null'
      }
    ]
  },
  amount_cents: {
    description: '',
    anyOf: [
      {
        type: 'integer',
        minimum: 0
      },
      {
        type: 'null'
      }
    ]
  },
  amount_max: {
    description: '',
    anyOf: [
      {
        type: 'number',
        minimum: 0
      },
      {
        type: 'null'
      }
    ]
  },
  increment_amount_minimum: {
    description: 'Define a server / client side increment restriction. E.g. only allow a a voucher to be issued or altered with 5 EUR minimum.',
    anyOf: [
      {
        type: 'number',
        minimum: 0,
        maximum: 100000
      },
      {
        type: 'null'
      }
    ]
  },
  currency: {
    description: '',
    type: 'string'
  },
  custom: {
    description: '',
    type: 'object'
  },
  metadata: oneOf({
    type: 'object',
    description: '',
    properties: {
      'issuer': oneOf({
        type: 'object',
        properties: {
          'name': oneOf({ type: 'string' }),
          'client': oneOf({ type: 'string' })
        }
      })
    }
  }),
  issuable: {
    description: '',
    type: 'boolean'
  },
  reissuable: {
    description: '',
    type: 'boolean'
  },
  issuer: oneOf({
    description: 'defualt issuer',
    type: 'string'
  }),
  customer: {
    description: 'The reference to a customer. The layout is an object to allow for imported vouchers to include any kind of customer reference. In the Tillhub voucher case the object will have at least an ID reference to the customer if existing.',
    anyOf: [
      {
        type: 'object'
      },
      {
        type: 'null'
      }
    ]
  },
  comment: {
    description: 'An arbitrary comment from a user for this voucher.',
    oneOf: [
      {
        type: 'string',
        maxLength: 1024
      },
      {
        type: 'null'
      }
    ]
  },
  expires_at: {
    description: 'Define until when this voucher should be usable. This will be hard validated on the API when incrementing / decrementing a voucher.',
    oneOf: [
      {
        type: 'string',
        format: 'date-time'
      },
      {
        type: 'null'
      }
    ]
  },
  barcodes: {
    description: '',
    type: 'object'
  },
  title: {
    description: '',
    type: 'string'
  },
  partial_redemption: {
    description: '',
    type: 'boolean'
  },
  active: {
    description: 'Define whether this voucher is currently active.',
    type: 'boolean'
  },
  bound_to: {
    description: '',
    type: 'object'
  },
  namespace: {
    description: '',
    type: 'string'
  },
  type: {
    description: '',
    type: 'string',
    'enum': [
      'amount',
      'discount',
      'product'
    ]
  },
  regions: {
    description: 'Regions to limit this voucher to.',
    oneOf: [
      {
        type: 'array',
        items: {
          type: 'string',
          minLength: 2,
          maxLength: 2,
          pattern: '^[A-Z]{2}$'
        }
      },
      {
        type: 'null'
      }
    ]
  },
  limited_to_region: {
    description: 'Define whether to limit this voucher in a particular region.',
    type: 'boolean'
  },
  refundable: {
    description: 'Define whether this voucher can be refunded or be used in a refund scenario.',
    type: 'boolean'
  },
  mutable: {
    description: '',
    type: 'boolean'
  },
  exchange_for_cash: {
    description: 'Define whether the value or rest value can be paid out with cash.',
    type: 'boolean'
  },
  restriction_single_transaction: {
    description: '',
    type: 'boolean'
  },
  is_campaign: {
    description: 'Mark this voucher to be a campaign itself. This should be used if you issue multiple vouchers with the same code and do not want to deduct value from it.',
    type: 'boolean'
  },
  system: {
    description: `The voucher system this voucher gets it's behaviour from and and will be matched upon lookup.`,
    default: null,
    ...oneOf({
      type: 'string',
      format: 'uuid',
      description: 'The Tillhub sub-system resource reference ID associated with this voucher (system.system in configurations).',
      example: '43847a66-97dc-4ac2-8e8a-c44920e1f22f'
    })
  },
  product: {
    default: null,
    ...oneOf({
      type: 'string',
      format: 'uuid',
      description: 'The Tillhub product resource reference ID associated with this voucher.',
      example: '43847a66-97dc-4ac2-8e8a-c44920e1f22f'
    })
  },
  constraints: {
    ...oneOf(require('./constraints'))
  },
  scan_prefix: {
    default: null,
    ...oneOf(scanPrefix)
  }
}
