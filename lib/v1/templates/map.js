module.exports = {
  type: 'object',
  additionalProperties: false,
  properties: {
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
    discount: {
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
    unit_price_exclude_vat: {
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
    unit_price_include_vat: {
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
    total_price_include_vat: {
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
    net_total: {
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
    total: {
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
    total_discount: {
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
    VAT: {
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
    comments: {
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
          default: false
        }
      }
    },
    attributes: {
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
          default: false
        }
      }
    },
    custom_id: {
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
