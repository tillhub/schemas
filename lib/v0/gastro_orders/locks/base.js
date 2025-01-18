module.exports = {
  order_id: {
    type: 'string',
    format: 'uuid'
  },
  register_id: {
    type: 'string',
    format: 'uuid'
  },
  branch_id: {
    type: 'string',
    format: 'uuid'
  },
  cashier_id: {
    type: 'string',
    format: 'uuid'
  },
  order_date: {
    type: 'string',
    format: 'date-time'
  },
  expires_at: {
    type: 'string',
    format: 'date-time'
  },
  status: {
    type: 'string',
    enum: ['locked', 'unlocked']
  },
  revision: {
    type: 'integer'
  }
}
