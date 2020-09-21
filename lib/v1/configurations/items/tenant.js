
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
          description: 'A Tillhub address object. More description in the properties...',
          type: 'object',
          additionalProperties: false,
          properties: {
            street: {
              description: 'A street name',
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
            street_number: {
              description: 'A street number',
              oneOf: [
                {
                  type: 'string',
                  maxLength: 16
                },
                {
                  type: 'null'
                }
              ]
            },
            locality: {
              description: 'The international format for a city, village and any other localizable city like place.',
              oneOf: [
                {
                  type: 'string'
                },
                {
                  type: 'null'
                }
              ]
            },
            region: {
              description: 'The international format for regional sub category of a country e.g. a state or province.',
              oneOf: [
                {
                  type: 'string'
                },
                {
                  type: 'null'
                }
              ]
            },
            postal_code: {
              description: 'A non-validated postal code.',
              oneOf: [
                {
                  type: 'string',
                  maxLength: 10
                },
                {
                  type: 'null'
                }
              ]
            },
            country: {
              description: 'A country as ISO Alpha-2 code.',
              oneOf: [
                {
                  type: 'string',
                  minLength: 2,
                  maxLength: 2,
                  pattern: '^[A-Z]{2}$'
                },
                {
                  type: 'null'
                }
              ]
            }
          },
          required: [
            'street',
            'street_number',
            'locality',
            'region',
            'postal_code',
            'country'
          ]
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
