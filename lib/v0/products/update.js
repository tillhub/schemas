module.exports = {
  type: 'object',
  'additionalProperties': false,
  'properties': {
    'name': {
      'anyOf': [
        {
          'type': 'string'
        },
        {
          'type': 'null'
        }
      ]
    },
    'description': {
      'anyOf': [
        {
          'type': 'string'
        },
        {
          'type': 'null'
        }
      ]
    },
    'attribute_combination': {
      'anyOf': [
        {
          'type': 'object'
        },
        {
          'type': 'null'
        }
      ]
    },
    'attributes': {
      'anyOf': [
        {
          'type': 'object'
        },
        {
          'type': 'null'
        }
      ]
    },
    'linked_to': {
      'anyOf': [
        {
          'type': 'object'
        },
        {
          'type': 'null'
        }
      ]
    },
    'prices': {
      'anyOf': [
        {
          'type': 'object'
        },
        {
          'type': 'null'
        }
      ]
    },
    'barcode': {
      'anyOf': [
        {
          'type': 'string'
        },
        {
          'type': 'null'
        }
      ]
    },
    'sku': {
      'anyOf': [
        {
          'type': 'string'
        },
        {
          'type': 'null'
        }
      ]
    },
    'stock_minimum': {
      'anyOf': [
        {
          'type': 'integer'
        },
        {
          'type': 'null'
        }
      ]
    },
    'stockable': {
      'anyOf': [
        {
          'type': 'boolean'
        },
        {
          'type': 'null'
        }
      ]
    },
    'linked_articles': {
      'anyOf': [
        {
          'type': 'array'
        },
        {
          'type': 'null'
        }
      ]
    },
    'metadata': {
      'anyOf': [
        {
          'type': 'object'
        },
        {
          'type': 'null'
        }
      ]
    },
    'audiences': {
      'anyOf': [
        {
          'type': 'array'
        },
        {
          'type': 'null'
        }
      ]
    },
    'keywords': {
      'anyOf': [
        {
          'type': 'array'
        },
        {
          'type': 'null'
        }
      ]
    },
    'categories': {
      'anyOf': [
        {
          'type': 'array'
        },
        {
          'type': 'null'
        }
      ]
    },
    'custom_ids': {
      'anyOf': [
        {
          'type': 'object'
        },
        {
          'type': 'null'
        }
      ]
    },
    'related_to': {
      'anyOf': [
        {
          'type': 'array'
        },
        {
          'type': 'null'
        }
      ]
    },
    'similar_to': {
      'anyOf': [
        {
          'type': 'array'
        },
        {
          'type': 'null'
        }
      ]
    },
    'released_at': {
      'anyOf': [
        {
          'type': 'string',
          'format': 'date-time'
        },
        {
          'type': 'null'
        }
      ]
    },
    'purchased_at': {
      'anyOf': [
        {
          'type': 'string',
          'format': 'date-time'
        },
        {
          'type': 'null'
        }
      ]
    },
    'produced_at': {
      'anyOf': [
        {
          'type': 'string',
          'format': 'date-time'
        },
        {
          'type': 'null'
        }
      ]
    },
    'custom_id': {
      'anyOf': [
        {
          'type': 'string'
        },
        {
          'type': 'null'
        }
      ]
    },
    'tax': {
      'anyOf': [
        {
          'type': 'string'
        },
        {
          'type': 'null'
        }
      ]
    },
    'account': {
      'anyOf': [
        {
          'type': 'string',
          'maxLength': 128
        },
        {
          'type': 'null'
        }
      ]
    },
    'vat_class': {
      'anyOf': [
        {
          'type': 'string'
        },
        {
          'type': 'null'
        }
      ]
    },
    'category': {
      'anyOf': [
        {
          'type': 'string'
        },
        {
          'type': 'null'
        }
      ]
    },
    'brand': {
      'anyOf': [
        {
          'type': 'string'
        },
        {
          'type': 'null'
        }
      ]
    },
    'active': {
      'type': 'boolean'
    },
    'deleted': {
      'type': 'boolean'
    },
    'type': {
      'anyOf': [
        {
          'type': 'string',
          'enum': [
            'product',
            'voucher',
            'linked',
            'product_linked',
            'variant',
            'product_variant'
          ]
        },
        {
          'type': 'null'
        }
      ]
    },
    'manufacturer': {
      'anyOf': [
        {
          'type': 'object'
        },
        {
          'type': 'null'
        }
      ]
    },
    'supplier': {
      'anyOf': [
        {
          'type': 'object'
        },
        {
          'type': 'null'
        }
      ]
    },
    'condition': {
      'anyOf': [
        {
          'type': 'string'
        },
        {
          'type': 'null'
        }
      ]
    },
    'images': {
      'anyOf': [
        {
          'type': 'object',
          'additionalProperties': false,
          'properties': {
            '1x': {
              'type': 'string',
              'format': 'uri'
            },
            'avatar': {
              'type': 'string',
              'format': 'uri'
            }
          }
        },
        {
          'type': 'null'
        }
      ]
    },
    'summary': {
      'anyOf': [
        {
          'type': 'string'
        },
        {
          'type': 'null'
        }
      ]
    },
    'insert_id': {
      'type': 'integer'
    },
    'product_group': {
      'anyOf': [
        {
          'type': 'string'
        },
        {
          'type': 'null'
        }
      ]
    },
    'manufacturers': {
      'oneOf': [
        {
          'type': 'array',
          'items': {
            'type': 'string',
            'format': 'uuid'
          }
        },
        {
          'type': 'null'
        }
      ]
    }
  },
  'required': [
    'name',
    'account',
    'tax'
  ]
}
