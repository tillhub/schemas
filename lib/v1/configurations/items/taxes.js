const vatRate = {
  description: 'A VAT rate as specified in taxes [0.0000, 1.0000]',
  type: 'number',
  example: 0.16,
  minimum: 0.0,
  maximum: 1.0,
  multipleOf: 0.0001
}
module.exports = {
  anyOf: [
    {
      type: 'null'
    },
    {
      type: 'object',
      additionalProperties: false,
      properties: {
        type: {
          type: 'string',
          enum: [
            'inclusive',
            'exclusive'
          ]
        },
        classes: {
          description: 'Defines non-generic classification of taxes per specific regional use case',
          type: 'object',
          properties: {
            de: {
              description: 'Tax classification according to German DSFinV-K 2.0, https://www.bzst.de/DE/Unternehmen/Aussenpruefungen/DigitaleSchnittstelleFinV/digitaleschnittstellefinv_node.html',
              type: 'object',
              properties: {
                rates_normal: {
                  description: 'VAT rates that belong to the regular VAT (0.19 or 0.16).',
                  type: 'array',
                  items: {
                    ...vatRate
                  }
                },
                rates_reduced1: {
                  description: 'VAT rates that belong to the reduced VAT (0.07 or 0.05).',
                  type: 'array',
                  items: {
                    ...vatRate
                  }
                },
                rates_special1: {
                  description: 'VAT rates that belong to the special VAT for agricultural products (0.107).',
                  type: 'array',
                  items: {
                    ...vatRate
                  }
                },
                rates_special2: {
                  description: 'VAT rates that belong to the special VAT for forestry products (0.055).',
                  type: 'array',
                  items: {
                    ...vatRate
                  }
                },
                rates_null: {
                  description: 'VAT rates that belong to the free VAT (0.00).',
                  type: 'array',
                  items: {
                    ...vatRate
                  }
                }
              }
            }
          }
        }
      }
    }
  ]
}
