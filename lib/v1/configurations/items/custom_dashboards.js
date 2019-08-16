module.exports = {
  type: 'object',
  description: 'Bring custom content into the Tillhub Apps, e.g. the dashboard',
  additionalProperties: false,
  properties: {
    enabled: {
      type: 'boolean',
      default: false
    },
    dashboards: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        properties: {
          enabled: {
            type: 'boolean',
            default: false
          },
          name: {
            type: 'string',
            minLength: 1,
            maxLength: 64
          },
          url: {
            type: 'string',
            format: 'uri'
          },
          pass_token: {
            type: 'boolean'
          },
          hooks: {
            description: 'Define were to hook this dashbaord in. In any cases it will be available in the dashboard /utilities/custom_dashboards',
            oneOf: [
              {
                type: 'array',
                items: {
                  type: 'object',
                  additionalProperties: false,
                  required: [
                    'app',
                    'position',
                    'locations'
                  ],
                  properties: {
                    app: {
                      type: 'string',
                      enum: [
                        'dashboard'
                      ]
                    },
                    position: {
                      oneOf: [
                        {
                          type: 'string',
                          enum: [
                            'first',
                            'last'
                          ]
                        },
                        {
                          type: 'integer',
                          minimum: 0
                        }
                      ]
                    },
                    locations: {
                      type: 'array',
                      items: {
                        type: 'string',
                        enum: [
                          'nav',
                          'nav.reports',
                          'nav.reports.statistics',
                          'nav.reports.financial_accounting',
                          'nav.reports.exports',
                          'nav.products',
                          'nav.customers',
                          'nav.vouchers',
                          'nav.staff',
                          'nav.utilities'
                        ]
                      }
                    }
                  }
                }
              },
              {
                type: 'null'
              }
            ]
          }
        }
      }
    }
  }
}
