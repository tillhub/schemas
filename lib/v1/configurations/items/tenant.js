module.exports = {
  firstname: {
    type: 'string',
    maxLength: 128
  },
  lastname: {
    type: 'string',
    maxLength: 128
  },
  tax_number: {
    type: 'number'
  },
  commercial_id: {
    type: 'string',
    description: 'Commercial identification number'
  },
  phone: {
    type: 'string',
    description: 'Phone number of commercial contact'
  }
}
