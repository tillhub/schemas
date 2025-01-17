const address = require('../../../common/address')

module.exports = {
  anyOf: [
    {
      type: 'null'
    },
    {
      type: 'object',
      additionalProperties: false,
      properties: {
        firstname: {
          type: 'string',
          maxLength: 128
        },
        lastname: {
          type: 'string',
          maxLength: 128
        },
        company_name: {
          type: 'string',
          maxLength: 128
        },
        address: {
          ...address
        },
        tax_number: {
          type: 'string'
        },
        vat_id: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'null'
            }
          ]
        },
        commercial_id: {
          type: 'string',
          description: 'Commercial identification number'
        },
        phone: {
          type: 'string',
          description: 'Phone number of commercial contact'
        }
      }
    }
  ]
}
