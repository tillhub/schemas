module.exports = {
  id: {
    type: 'string',
    example: 'd0d40841-b1a7-438a-9d1e-2bfec590d2e3',
    description: 'unique ID of this table layout'
  },
  client_id: {
    type: 'string',
    example: 'd0d40841-b1a7-438a-9d1e-2bfec590d2e3',
    description: 'unique ID of this table layout'
  },
  register: {
    type: 'string',
    example: 'd0d40841-b1a7-438a-9d1e-2bfec590d2e3',
    description: 'ID of the register that contains this table layout'
  },
  rooms: {
    type: 'array',
    items: require('./room')
  }
}
