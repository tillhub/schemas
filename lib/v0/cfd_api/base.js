/**
 * BASE TYPES
 */

const money = {
  'type': 'number',
  'multipleOf': 0.01
}

const int = {
  'type': 'number',
  'multipleOf': 1
}

const percentage = {
  'type': 'number'
}

const str = (...enums) => ({
  'type': 'string',
  'enum': enums.length ? enums : undefined
})

const currency = {
  'type': 'string',
  'description': 'three letter country code specified by [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217)',
  'example': 'EUR',
  'minLength': 3,
  'maxLength': 3
}

const person = {
  'type': 'object',
  'properties': {
    'title': str(),
    'name': str(),
    'custom_id': str()
  }
}

/**
 * MESSAGE BODIES
 */

const authBody = {
  'type': 'object',
  'description': 'AUTH body',
  'properties': {
    'user': str(),
    'token': str(),
    'id': {
      'type': 'string',
      'format': 'uuid'
    }
  },
  'required': [
    'user',
    'token',
    'id'
  ]
}
const actionBody = {
  'type': 'object',
  'description': 'ACTION body',
  'properties': {
    'name': str(),
    'payload': {
      'type': 'object'
    }
  },
  'required': [
    'name'
  ]
}

const posBody = {
  'type': 'object',
  'description': 'POS_MESSAGE body',
  'properties': {
    'view': str('idle', 'welcome', 'cart', 'payment', 'payment_terminal', 'payment_accepted', 'goodbye'),
    'payload': {
      'type': 'object',
      'properties': {
        'title': str(),
        'message': str(),
        'cashier': person,
        'customer': person,
        'tax_type': str('inclusive', 'exclusive'),
        'summary_items': {
          'type': 'array',
          'items': {
            'type': 'object',
            'properties': {
              'currency': currency,
              'sub_total': money,
              'amount_total_net': money,
              'amount_total_gross': money,
              'tax_amount_total': money,
              'discount_amount_total': money,
              'requested_amount_total': money,
              'requested_amount_left': money,
              'given_amount_total': money
            }
          }
        },
        'items': {
          'type': 'array',
          'items': {
            'type': 'object',
            'properties': {
              'type': str('item', 'discount'),
              'name': str(),
              'description': str(),
              'qty': int,
              'vat_rate': percentage,
              'currency': currency,
              'sub_total': money,
              'amount_total_net': money,
              'amount_total_gross': money,
              'amount_unit_net': money,
              'amount_unit_gross': money,
              'tax_amount_total': money,
              'discount_amount_total': money,
              'discounts': {
                'type': 'array',
                'items': {
                  'type': 'object',
                  'oneOf': [
                    {
                      'properties': {
                        'rate': percentage,
                        'name': str(),
                        'amount_total': money,
                        'index': int
                      },
                      'required': ['rate']
                    },
                    {
                      'properties': {
                        'value': money,
                        'name': str(),
                        'amount_total': money,
                        'index': int
                      },
                      'required': ['value']
                    }
                  ]
                }
              }
            }
          }
        },
        'payments': {
          'type': 'array',
          'items': {
            'type': 'object',
            'properties': {
              'type': str('cash', 'card'),
              'name': str(),
              'currency': currency,
              'amount_given': money,
              'tip_total': money
            }
          }
        }
      }
    }
  },
  'required': ['view']
}

module.exports = {
  str, // TODO: move this into a helper file at some point
  authBody,
  actionBody,
  posBody
}
