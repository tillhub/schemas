module.exports = {
  customers: {
    description: 'Customers UUIDs to bound this voucher to - they can be found on vouchers_customers table.',
    type: 'array',
    minItems: 1,
    items: {
      type: 'string',
      format: 'uuid'
    }
  }}
