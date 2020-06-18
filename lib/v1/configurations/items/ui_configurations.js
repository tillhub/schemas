const { oneOf } = require('../../../helpers/payload-or-null')

const buttonUIConfiguration = {
  type: 'object',
  properties: {
    visible: oneOf({
      description: 'Defines if the button is visible (otherwise hidden)',
      type: 'boolean',
      default: true
    }),
    enabled: oneOf({
      description: 'Defines if the button is enabled (otherwise greyed out)',
      type: 'boolean',
      default: true
    })
  }
}

module.exports = {
  ...oneOf({
    type: 'object',
    properties: {
      dashboard: {
        type: 'object',
        properties: {
          products: {
            type: 'object',
            properties: {
              list: {
                type: 'object',
                properties: {
                  quick_view_enabled: {
                    type: 'boolean'
                  }
                }
              },
              edit: {
                type: 'object',
                properties: {
                  prices: {
                    type: 'object',
                    properties: {
                      click_to_edit_enabled: {
                        type: 'boolean'
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      pos: {
        type: 'object',
        description: 'UI configurations for POS clients',
        properties: {
          views: {
            ...oneOf({
              type: 'object',
              description: 'per view UI configurations',
              additionalProperties: true,
              properties: {
                finish_payment: {
                  description: 'Summary view after finalizing a sale',
                  type: 'object',
                  properties: {
                    buttons: {
                      description: 'Buttons that can be toggled in/out (if implicitly available)',
                      type: 'object',
                      properties: {
                        email_receipt: oneOf({
                          description: 'Defines the \'E-Mail Recipt\' button - only non-invoiced sales',
                          ...buttonUIConfiguration
                        }),
                        email_quittance: oneOf({
                          description: 'Defines the \'E-Mail Quittance\' button - only non-invoiced sales',
                          ...buttonUIConfiguration
                        }),
                        email_invoice: oneOf({
                          description: 'Defines the \'E-Mail Invoice\' button - only invoiced sales',
                          ...buttonUIConfiguration
                        })
                      }
                    }
                  }
                },
                history_details: {
                  description: 'Detailed view (per transcation type) inside the history',
                  type: 'object',
                  properties: {
                    buttons: {
                      description: 'Buttons that can be toggled in/out (if implicitly available)',
                      type: 'object',
                      properties: {
                        email_receipt: oneOf({
                          description: 'Defines the \'E-Mail Recipt\' button - only non-invoiced sales',
                          ...buttonUIConfiguration
                        }),
                        email_quittance: oneOf({
                          description: 'Defines the \'E-Mail Quittance\' button - only non-invoiced sales',
                          ...buttonUIConfiguration
                        }),
                        email_invoice: oneOf({
                          description: 'Defines the \'E-Mail Invoice\' button - only invoiced sales',
                          ...buttonUIConfiguration
                        })
                      }
                    }
                  }
                },
                carts: {
                  description: 'Carts tab in the sale view (contains saved carts and delivery notes)',
                  type: 'object',
                  properties: {
                    grouping: oneOf({
                      description: 'Additional grouping of carts and delivery notes by:',
                      type: 'object',
                      properties: {
                        by: oneOf({
                          type: 'string',
                          default: 'customers',
                          enum: [
                            'none',
                            'customers',
                            'cashiers'
                          ]
                        }),
                        max: oneOf({
                          type: 'integer',
                          description: 'The maximum number of groups to display',
                          default: 50,
                          maximum: 100,
                          minimum: 0
                        }),
                        sorted_by: oneOf({
                          type: 'string',
                          description: 'Define how the groups are sorted',
                          default: 'name',
                          enum: [
                            'none',
                            'name',
                            'count' // number of entries (#saved_carts + #delevery_notes)
                          ]
                        })
                      }
                    })
                  }
                }
              }
            })
          }
        }
      }
    }
  })
}
