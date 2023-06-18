module.exports = {
  $id: 'https://schemas.tillhub.com/v0/pdfs.templates.purchase-orders.create.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  type: 'object',
  properties: {
    order: {
      type: 'object',
      properties: {
        id: {
          type: 'string'
        },
        createdAt: {
          type: 'string'
        },
        updatedAt: {
          type: 'string'
        },
        purchaseOrderNumber: {
          type: 'string'
        },
        notes: {
          type: 'string'
        },
        status: {
          type: 'string'
        },
        totalAmount: {
          type: 'integer'
        },
        recipients: {
          type: 'array',
          items: [
            {
              type: 'string'
            },
            {
              type: 'string'
            }
          ]
        },
        createdBy: {
          anyOf: [
            {
              type: 'string'
            },
            {
              type: 'null'
            }
          ]
        },
        creatorFullName: {
          type: 'string'
        },
        sentAt: {
          anyOf: [
            {
              type: 'string'
            },
            {
              type: 'null'
            }
          ]
        },
        pdfUrl: {
          anyOf: [
            {
              type: 'string'
            },
            {
              type: 'null'
            }
          ]
        },
        businessPartner: {
          type: 'object',
          properties: {
            id: {
              type: 'string'
            },
            companyName: {
              type: 'string'
            }
          },
          required: [
            'id',
            'companyName'
          ]
        },
        products: {
          type: 'array',
          items: [
            {
              type: 'object',
              properties: {
                id: {
                  type: 'string'
                },
                createdAt: {
                  type: 'string'
                },
                updatedAt: {
                  type: 'string'
                },
                productId: {
                  type: 'string'
                },
                productName: {
                  type: 'string'
                },
                price: {
                  type: 'integer'
                },
                vatPercent: {
                  type: 'number'
                },
                discountPercent: {
                  type: 'integer'
                },
                quantity: {
                  type: 'integer'
                },
                totalUntaxed: {
                  type: 'number'
                },
                totalWithTax: {
                  type: 'integer'
                }
              },
              required: [
                'id',
                'productId',
                'productName',
                'price',
                'vatPercent',
                'discountPercent',
                'quantity',
                'totalUntaxed',
                'totalWithTax'
              ]
            },
            {
              type: 'object',
              properties: {
                id: {
                  type: 'string'
                },
                createdAt: {
                  type: 'string'
                },
                updatedAt: {
                  type: 'string'
                },
                productId: {
                  type: 'string'
                },
                productName: {
                  type: 'string'
                },
                price: {
                  type: 'integer'
                },
                vatPercent: {
                  type: 'number'
                },
                discountPercent: {
                  type: 'number'
                },
                quantity: {
                  type: 'integer'
                },
                totalUntaxed: {
                  type: 'number'
                },
                totalWithTax: {
                  type: 'integer'
                }
              },
              required: [
                'id',
                'productId',
                'productName',
                'price',
                'vatPercent',
                'discountPercent',
                'quantity',
                'totalUntaxed',
                'totalWithTax'
              ]
            }
          ]
        }
      },
      required: [
        'id',
        'purchaseOrderNumber',
        'notes',
        'status',
        'totalAmount',
        'recipients',
        'createdBy',
        'products'
      ]
    },
    company: {
      type: 'object',
      properties: {
        vat_id: {
          type: 'string'
        },
        address: {
          type: 'object',
          properties: {
            region: {
              type: 'string'
            },
            street: {
              type: 'string'
            },
            country: {
              type: 'string'
            },
            locality: {
              type: 'string'
            },
            postal_code: {
              type: 'string'
            },
            street_number: {
              type: 'string'
            }
          },
          required: [
            'region',
            'street',
            'country',
            'locality',
            'postal_code',
            'street_number'
          ]
        },
        lastname: {
          type: 'string'
        },
        firstname: {
          type: 'string'
        },
        tax_number: {
          type: 'string'
        },
        company_name: {
          type: 'string'
        }
      },
      required: [
        'vat_id',
        'address',
        'lastname',
        'firstname',
        'tax_number',
        'company_name'
      ]
    },
    businessPartner: {
      type: 'object',
      properties: {
        id: {
          type: 'string'
        },
        createdAt: {
          type: 'string'
        },
        updatedAt: {
          type: 'string'
        },
        active: {
          type: 'boolean'
        },
        deletedAt: {
          type: 'null'
        },
        companyName: {
          type: 'string'
        },
        description: {
          type: 'string'
        },
        number: {
          type: 'string'
        },
        firstName: {
          type: 'string'
        },
        lastName: {
          type: 'string'
        },
        email: {
          type: 'string'
        },
        phoneNumbers: {
          type: 'array',
          items: [
            {
              type: 'object',
              properties: {
                id: {
                  type: 'string'
                },
                createdAt: {
                  type: 'string'
                },
                updatedAt: {
                  type: 'string'
                },
                type: {
                  type: 'string'
                },
                number: {
                  type: 'string'
                }
              },
              required: [
                'type',
                'number'
              ]
            }
          ]
        },
        paymentTerms: {
          type: 'integer'
        },
        taxNumber: {
          type: 'string'
        },
        glnNumber: {
          type: 'string'
        },
        taxSubject: {
          type: 'boolean'
        },
        accountsReceivable: {
          type: 'array',
          items: {}
        },
        accountsPayable: {
          type: 'array',
          items: {}
        },
        addresses: {
          type: 'array',
          items: [
            {
              type: 'object',
              properties: {
                id: {
                  type: 'string'
                },
                createdAt: {
                  type: 'string'
                },
                updatedAt: {
                  type: 'string'
                },
                type: {
                  type: 'string'
                },
                country: {
                  type: 'string'
                },
                region: {
                  type: 'string'
                },
                locality: {
                  type: 'string'
                },
                street: {
                  type: 'string'
                },
                streetNumber: {
                  type: 'string'
                },
                lines: {
                  type: 'string'
                },
                postalCode: {
                  type: 'string'
                }
              },
              required: [
                'id',
                'type',
                'country',
                'region',
                'locality',
                'street',
                'streetNumber',
                'lines',
                'postalCode'
              ]
            }
          ]
        },
        bankAccounts: {
          type: 'array',
          items: [
            {
              type: 'object',
              properties: {
                id: {
                  type: 'string'
                },
                createdAt: {
                  type: 'string'
                },
                updatedAt: {
                  type: 'string'
                },
                name: {
                  type: 'string'
                },
                iban: {
                  type: 'string'
                },
                swift: {
                  type: 'string'
                }
              },
              required: [
                'id',
                'name',
                'iban',
                'swift'
              ]
            }
          ]
        }
      },
      required: [
        'id',
        'active',
        'companyName',
        'description',
        'number',
        'firstName',
        'lastName',
        'email',
        'phoneNumbers',
        'paymentTerms',
        'taxNumber',
        'glnNumber',
        'taxSubject',
        'addresses',
        'bankAccounts'
      ]
    }
  },
  required: [
    'order',
    'company',
    'businessParnter'
  ]
}
