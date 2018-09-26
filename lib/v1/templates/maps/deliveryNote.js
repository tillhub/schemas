module.exports = {
  type: 'object',
  additionalProperties: false,
  properties: {
    product: {
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
    name: {
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
    vat_rate: {
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
    qty: {
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
    discount_amount: {
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
    net: {
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
    gross: {
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
