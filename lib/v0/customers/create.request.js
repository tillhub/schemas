module.exports = {
  $id: 'https://schemas.tillhub.com/v0/customers.create.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  type: 'object',
  properties: {
    firstname: {
      anyOf: [
        {
          type: 'string',
          maxLength: 32,
          minLength: 1
        },
        {
          type: 'null'
        }
      ]
    },
    lastname: {
      anyOf: [
        {
          type: 'string',
          maxLength: 32,
          minLength: 1
        },
        {
          type: 'null'
        }
      ]
    },
    middlename: {
      anyOf: [
        {
          type: 'string',
          maxLength: 32,
          minLength: 1
        },
        {
          type: 'null'
        }
      ]
    },
    displayname: {
      anyOf: [
        {
          type: 'string',
          maxLength: 32,
          minLength: 3
        },
        {
          type: 'null'
        }
      ]
    },
    phonenumbers: {
      anyOf: [
        {
          type: 'object',
          additionalProperties: false,
          properties: {
            main: {
              type: 'string'
            },
            home: {
              type: 'string'
            },
            mobile: {
              type: 'string'
            },
            work: {
              type: 'string'
            }
          },
          anyOf: [
            {
              required: [
                'main'
              ]
            },
            {
              required: [
                'home'
              ]
            },
            {
              required: [
                'mobile'
              ]
            },
            {
              required: [
                'work'
              ]
            }
          ]
        },
        {
          type: 'null'
        }
      ]
    },
    email: {
      'default': null,
      anyOf: [
        {
          type: 'string',
          maxLength: 128,
          format: 'email'
        },
        {
          type: 'null'
        }
      ]
    },
    customer_number: {
      anyOf: [
        {
          type: 'string',
          maxLength: 128,
          minLength: 1
        },
        {
          type: 'null'
        }
      ]
    },
    company: {
      anyOf: [
        {
          type: 'object',
          additionalProperties: false,
          properties: {
            name: {
              type: 'string',
              maxLength: 64
            }
          }
        },
        {
          type: 'null'
        }
      ]
    },
    description: {
      anyOf: [
        {
          type: 'string'
        },
        {
          type: 'null'
        }
      ]
    },
    is_b2b: {
      anyOf: [
        {
          type: 'boolean'
        },
        {
          type: 'null'
        }
      ]
    },
    date_of_birth: {
      anyOf: [
        {
          type: 'string',
          format: 'date-time'
        },
        {
          type: 'null'
        }
      ]
    },
    update_at: {
      anyOf: [
        {
          type: 'string',
          format: 'date-time'
        },
        {
          type: 'null'
        }
      ]
    },
    image: {
      anyOf: [
        {
          type: 'object',
          additionalProperties: false,
          properties: {
            '1x': {
              type: 'string',
              format: 'uri'
            },
            avatar: {
              oneOf: [
                {
                  type: 'string',
                  format: 'uri'
                },
                {
                  type: 'null'
                }
              ]
            }
          }
        },
        {
          type: 'null'
        }
      ]
    },
    active: {
      type: 'boolean'
    },
    deleted: {
      type: 'boolean'
    },
    contacts: {
      anyOf: [
        {
          type: 'object',
          additionalProperties: false,
          properties: {
            email: {
              type: 'object',
              additionalProperties: false,
              properties: {
                enabled: {
                  type: 'boolean'
                }
              }
            },
            newsletter: {
              type: 'object',
              additionalProperties: false,
              properties: {
                enabled: {
                  type: 'boolean'
                }
              }
            },
            phone: {
              type: 'object',
              additionalProperties: false,
              properties: {
                enabled: {
                  type: 'boolean'
                }
              }
            },
            post: {
              type: 'object',
              additionalProperties: false,
              properties: {
                enabled: {
                  type: 'boolean'
                }
              }
            }
          }
        },
        {
          type: 'null'
        }
      ]
    },
    metadata: {
      type: 'object'
    },
    addresses: {
      anyOf: [
        {
          type: 'array',
          minItems: 1,
          maxItems: 3,
          items: {
            type: 'object',
            additionalProperties: false,
            properties: {
              lines: {
                oneOf: [
                  {
                    type: 'array',
                    minItems: 1,
                    maxItems: 4,
                    items: {
                      type: 'string',
                      minLength: 1
                    }
                  },
                  {
                    type: 'null'
                  }
                ]
              },
              street: {
                oneOf: [
                  {
                    type: 'string'
                  },
                  {
                    type: 'null'
                  }
                ]
              },
              street_number: {
                oneOf: [
                  {
                    type: 'string'
                  },
                  {
                    type: 'null'
                  }
                ]
              },
              locality: {
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
                ],
                'default': null
              },
              type: {
                oneOf: [
                  {
                    type: 'string',
                    'enum': [
                      'delivery',
                      'billing'
                    ]
                  },
                  {
                    type: 'null'
                  }
                ]
              }
            },
            required: [
              'lines',
              'street',
              'street_number',
              'locality',
              'region',
              'postal_code',
              'country',
              'type'
            ]
          }
        },
        {
          type: 'null'
        }
      ]
    },
    custom: {
      anyOf: [
        {
          type: 'object'
        },
        {
          type: 'null'
        }
      ]
    },
    comment: {
      anyOf: [
        {
          type: 'string',
          maxLength: 1024
        },
        {
          type: 'null'
        }
      ]
    },
    discounts: {
      anyOf: [
        {
          type: 'array',
          minItems: 1,
          maxItems: 10,
          items: {
            anyOf: [
              {
                type: 'object',
                additionalProperties: false,
                properties: {
                  id: {
                    type: 'string',
                    maxLength: 128
                  },
                  amount: {
                    type: 'number',
                    minimum: 0
                  },
                  type: {
                    type: 'string',
                    'enum': [
                      'percentage',
                      'value'
                    ]
                  },
                  account: {
                    anyOf: [
                      {
                        type: 'string',
                        maxLength: 128
                      },
                      {
                        type: 'null'
                      }
                    ]
                  },
                  name: {
                    anyOf: [
                      {
                        type: 'string',
                        maxLength: 64
                      },
                      {
                        type: 'null'
                      }
                    ]
                  },
                  group: {
                    type: 'string',
                    'enum': [
                      'cart',
                      'customer'
                    ]
                  }
                },
                required: [
                  'group',
                  'type',
                  'name',
                  'amount',
                  'id'
                ]
              },
              {
                type: 'object',
                additionalProperties: false,
                properties: {
                  amount: {
                    type: 'number',
                    minimum: 0
                  },
                  type: {
                    type: 'string',
                    'enum': [
                      'percent',
                      'value'
                    ]
                  },
                  group: {
                    type: 'string',
                    'enum': [
                      'cart',
                      'customer'
                    ]
                  }
                },
                required: [
                  'amount',
                  'type',
                  'group'
                ]
              }
            ]
          }
        },
        {
          type: 'null'
        }
      ]
    },
    client_id: {
      anyOf: [
        {
          type: 'string',
          maxLength: 128
        },
        {
          type: 'null'
        }
      ]
    },
    external_reference: {
      anyOf: [
        {
          type: 'string',
          minLength: 3,
          maxLength: 128
        },
        {
          type: 'null'
        }
      ]
    }
  },
  anyOf: [
    {
      required: [
        'firstname'
      ]
    },
    {
      required: [
        'lastname'
      ]
    }
  ],
  required: []
}
