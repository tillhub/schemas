
module.exports = {
  oneOf: [
    {
      type: 'null'
    },
    {
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
              type: 'object',
              description: 'per view UI configurations',
              properties: {
                finish_payment: {
                  description: 'Summary view after finalizing a sale',
                  type: 'object',
                  properties: {
                    buttons: {
                      description: 'Buttons that can be toggled in/out (if implicitly available)',
                      type: 'object',
                      properties: {
                        email_receipt: {
                          description: 'Availability of the \'E-Mail Recipt\' button - only non-invoiced sales',
                          type: 'boolean',
                          default: 'true'
                        },
                        email_quittance: {
                          description: 'Availability of the \'E-Mail Quittance\' button - only non-invoiced sales',
                          type: 'boolean',
                          default: 'true'
                        },
                        email_invoice: {
                          description: 'Availability of the \'E-Mail Invoice\' button - only invoiced sales',
                          type: 'boolean',
                          default: 'true'
                        }
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
                        email_receipt: {
                          description: 'Availability of the \'E-Mail Recipt\' button - only non-invoiced sales',
                          type: 'boolean',
                          default: 'true'
                        },
                        email_quittance: {
                          description: 'Availability of the \'E-Mail Quittance\' button - only non-invoiced sales',
                          type: 'boolean',
                          default: 'true'
                        },
                        email_invoice: {
                          description: 'Availability of the \'E-Mail Invoice\' button - only invoiced sales',
                          type: 'boolean',
                          default: 'true'
                        }
                      }
                    }
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
