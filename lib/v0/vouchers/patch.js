module.exports = {
  type: 'object',
  'additionalProperties': false,
  'properties': {
    'amount': {
      'anyOf': [
        {
          'type': 'number',
          'minimum': 0
        },
        {
          'type': 'null'
        }
      ]
    },
    'amount_cents': {
      'anyOf': [
        {
          'type': 'integer',
          'minimum': 0
        },
        {
          'type': 'null'
        }
      ]
    },
    'amount_max': {
      'anyOf': [
        {
          'type': 'number',
          'minimum': 0
        },
        {
          'type': 'null'
        }
      ]
    },
    'custom': {
      'type': 'object'
    },
    'metadata': {
      'type': 'object'
    },
    'issuable': {
      'type': 'boolean'
    },
    'reissuable': {
      'type': 'boolean'
    },
    'issuer': {
      'type': 'string'
    },
    'customer': {
      'anyOf': [
        {
          'type': 'object'
        },
        {
          'type': 'null'
        }
      ]
    },
    'in_transaction': {
      'anyOf': [
        {
          'type': 'boolean'
        },
        {
          'type': 'null'
        }
      ]
    },
    'comment': {
      'type': 'string',
      'maxLength': 1024
    },
    'expires_at': {
      'oneOf': [
        {
          'type': 'string',
          'format': 'date-time'
        },
        {
          'type': 'null'
        }
      ]
    },
    'barcodes': {
      'type': 'object'
    },
    'title': {
      'type': 'string'
    },
    'partial_redemption': {
      'type': 'boolean'
    },
    'active': {
      'type': 'boolean'
    },
    'bound_to': {
      'type': 'object'
    },
    'namespace': {
      'type': 'string'
    },
    'type': {
      'type': 'string',
      'enum': [
        'amount',
        'discount',
        'product'
      ]
    },
    'regions': {
      'type': 'array',
      'minItems': 1,
      'maxItems': 1,
      'items': {
        'oneOf': [
          {
            'type': 'string',
            'minLength': 2,
            'maxLength': 2,
            'pattern': '^[A-Z]{2}$'
          },
          {
            'type': 'null'
          }
        ]
      }
    },
    'limited_to_region': {
      'type': 'boolean'
    },
    'refundable': {
      'type': 'boolean'
    },
    'mutable': {
      'type': 'boolean'
    },
    'exchange_for_cash': {
      'type': 'boolean'
    },
    'restriction_single_transaction': {
      'type': 'boolean'
    }
  },
  'required': []
}
