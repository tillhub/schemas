module.exports = {
  type: 'object',
  additionalProperties: false,
  properties: {
    product_number: {
      type: 'object',
      additionalProperties: false,
      properties: {
        default: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'null'
            }
          ]
        },
        custom: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'null'
            }
          ]
        },
        show: {
          type: 'boolean',
          default: true
        }
      }
    },
    product_name: {
      type: 'object',
      additionalProperties: false,
      properties: {
        default: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'null'
            }
          ]
        },
        custom: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'null'
            }
          ]
        },
        show: {
          type: 'boolean',
          default: true
        }
      }
    },
    vat_percentage: {
      type: 'object',
      additionalProperties: false,
      properties: {
        default: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'null'
            }
          ]
        },
        custom: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'null'
            }
          ]
        },
        show: {
          type: 'boolean',
          default: true
        }
      }
    },
    quantity: {
      type: 'object',
      additionalProperties: false,
      properties: {
        default: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'null'
            }
          ]
        },
        custom: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'null'
            }
          ]
        },
        show: {
          type: 'boolean',
          default: true
        }
      }
    },
    article_price: {
      type: 'object',
      additionalProperties: false,
      properties: {
        default: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'null'
            }
          ]
        },
        custom: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'null'
            }
          ]
        },
        show: {
          type: 'boolean',
          default: true
        }
      }
    },
    discounts: {
      type: 'object',
      additionalProperties: false,
      properties: {
        default: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'null'
            }
          ]
        },
        custom: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'null'
            }
          ]
        },
        show: {
          type: 'boolean',
          default: true
        }
      }
    },
    selling_price_total: {
      type: 'object',
      additionalProperties: false,
      properties: {
        default: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'null'
            }
          ]
        },
        custom: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'null'
            }
          ]
        },
        show: {
          type: 'boolean',
          default: true
        }
      }
    }
  }
}
