const base = require('./base')
const balanceCashUnits = require('./cash_units/base')
const balancePayments = require('./payments/base')
const balanceRevenues = require('./revenues/base')
const balanceTotals = require('./totals/base')
const balanceTaxes = require('./taxes/base')
const balanceTips = require('./tips/base')

module.exports = {
  $id: 'https://schemas.tillhub.com/v1/balances.create.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  additionalProperties: false,
  required: [
    'totals',
    'revenues',
    'payments',
    'taxes',
    'tips',
    'cash_units'
  ],
  properties: {
    ...base,
    totals: {
      type: 'array',
      minItems: 1,
      items: {
        ...balanceTotals
      }
    },
    revenues: {
      type: 'array',
      minItems: 1,
      items: {
        ...balanceRevenues
      }
    },
    payments: {
      type: 'array',
      minItems: 1,
      items: {
        ...balancePayments
      }
    },
    taxes: {
      type: 'array',
      minItems: 1,
      items: {
        ...balanceTaxes
      }
    },
    tips: {
      type: 'array',
      items: {
        ...balanceTips
      }
    },
    cash_units: {
      type: 'array',
      items: {
        ...balanceCashUnits
      }
    }
  }
}
