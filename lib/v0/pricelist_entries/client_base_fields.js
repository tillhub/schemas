const { oneOf } = require('../../helpers/payload-or-null')
const { timeConstraints } = require('../../common/time_constraints')

module.exports = {
  active: {
    type: 'boolean',
    default: true,
    description: 'Secondary default flag - needs specific requirements to be used by clients.'
  },
  deleted: {
    type: 'boolean',
    default: false,
    description: 'Primary flag to request deletion on the client\'s local data.'
  },
  type: {
    type: 'string',
    'enum': [
      'default',
      'constrained'
    ],
    description: 'The type of the price entry, a default entry should always exist'
  },
  product: {
    type: 'string',
    format: 'uuid',
    description: 'The Tillhub product resource reference ID.',
    example: '43847a66-97dc-4ac2-8e8a-c44920e1f22f'
  },
  scaled: {
    type: 'array',
    description: 'The scaled price for this entry - one element of 0 and amount in most simple cases',
    items: {
      type: 'object',
      description: 'One scaled price element',
      properties: {
        qty: {
          example: '0.0',
          type: 'number',
          minimum: 0,
          maximum: 10000,
          description: 'The quantity from which one upward the price is valid'
        },
        amount: {
          example: '27633.02',
          type: 'number',
          minimum: 0,
          maximum: 1000000,
          multipleOf: 0.01,
          description: 'Depending on the taxing-schme - the net or gross price that is valid above set quantity'
        }
      }
    }
  },
  time: oneOf({
    ...timeConstraints
  }),
  name: oneOf({
    type: 'string',
    maxLength: 64,
    description: 'An optional name for the list entry',
    example: 'Summer happy hour 1'
  })
}
