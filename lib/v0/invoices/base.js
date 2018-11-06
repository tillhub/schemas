module.exports = {
  comments: {
    oneOf: [
      {
        type: 'string',
        minLength: 1
      },
      {
        type: 'null'
      }
    ]
  },
  customer: {
    oneOf: [
      {
        type: 'string',
        format: 'uuid'
      },
      {
        type: 'null'
      }
    ]
  },
  customer_external_reference_id: {
    oneOf: [
      {
        type: 'string',
        minLength: 1
      },
      {
        type: 'null'
      }
    ]
  },
  amount: {
    oneOf: [
      {
        type: 'object'
      },
      {
        type: 'null'
      }
    ]
  },
  currency: {
    oneOf: [
      {
        type: 'null'
      },
      {
        type: 'string',
        minLength: 3,
        maxLength: 3
      }
    ]
  },
  issued_at: {
    oneOf: [
      {
        type: 'string',
        format: 'date-time'
      },
      {
        type: 'null'
      }
    ]
  },
  balance: {
    oneOf: [
      {
        type: 'number'
      },
      {
        type: 'null'
      }
    ]
  },
  due_date: {
    oneOf: [
      {
        type: 'string',
        format: 'date-time'
      },
      {
        type: 'null'
      }
    ]
  },
  status: {
    oneOf: [
      {
        type: 'null'
      },
      {
        type: 'string',
        enum: [
          'paid',
          'overdue',
          'issued'
        ]
      }
    ]
  },
  archived: {
    type: 'boolean'
  },
  archived_at: {
    oneOf: [
      {
        type: 'string',
        format: 'date-time'
      },
      {
        type: 'null'
      }
    ]
  },
  custom_id: {
    oneOf: [
      {
        type: 'string',
        minLength: 1
      },
      {
        type: 'null'
      }
    ]
  },
  external_reference_id: {
    oneOf: [
      {
        type: 'string',
        minLength: 1
      },
      {
        type: 'null'
      }
    ]
  },
  external_reference: {
    oneOf: [
      {
        type: 'object'
      },
      {
        type: 'null'
      }
    ]
  },
  metadata: {
    oneOf: [
      {
        type: 'object'
      },
      {
        type: 'null'
      }
    ]
  },
  origins: {
    oneOf: [
      {
        type: 'array',
        minItems: 1
      },
      {
        type: 'null'
      }
    ]
  },
  related_to: {
    oneOf: [
      {
        type: 'array',
        minItems: 1
      },
      {
        type: 'null'
      }
    ]
  },
  depends_on: {
    oneOf: [
      {
        type: 'array',
        minItems: 1
      },
      {
        type: 'null'
      }
    ]
  },
  client_id: {
    oneOf: [
      {
        type: 'string',
        minLength: 1
      },
      {
        type: 'null'
      }
    ]
  },
  deleted: {
    type: 'boolean'
  },
  active: {
    type: 'boolean'
  },
  assignee: {
    oneOf: [
      {
        type: 'string',
        format: 'uuid'
      },
      {
        type: 'null'
      }
    ]
  },
  assigned_by: {
    oneOf: [
      {
        type: 'string',
        format: 'uuid'
      },
      {
        type: 'null'
      }
    ]
  },
  transaction: {
    oneOf: [
      {
        type: 'string',
        format: 'uuid'
      },
      {
        type: 'null'
      }
    ]
  },
  location: {
    oneOf: [
      {
        type: 'string',
        format: 'uuid'
      },
      {
        type: 'null'
      }
    ]
  }
}
