const { oneOf } = require('../../helpers/payload-or-null')

module.exports = {
  branch_id: {
    description: 'The id of the parent branch.',
    type: 'string',
    format: 'uuid'
  },
  mms_id: oneOf({
    description: 'The id of the branch that identifies it in Mms.',
    type: 'string',
    format: 'uuid'
  }),
  created_by: oneOf({
    description: 'Who created the branch in Mms.',
    type: 'string'
  }),
  updated_by: oneOf({
    description: 'Who updated the branch for the last time in Mms.',
    type: 'string'
  }),
  deleted_by: oneOf({
    description: 'Who deleted the branch in Mms.',
    type: 'string'
  }),
  scope: oneOf({
    description: 'The scope from Mms.',
    type: 'string',
    format: 'uuid'
  }),
  attributes: oneOf({
    description: 'The attributes of the branch.',
    type: 'object'
  }),
  vat_id: oneOf({
    description: 'The vat id.',
    type: 'string'
  }),
  commercial_register_number: oneOf({
    description: 'The commercial register number.',
    type: 'string'
  }),
  creditor_id: oneOf({
    description: 'The creditor id.',
    type: 'string'
  }),
  court_of_jurisdiction: oneOf({
    description: 'The court of jurisdiction.',
    type: 'string'
  }),
  company_name_short: oneOf({
    description: 'The short company name.',
    type: 'string'
  }),
  company_description: oneOf({
    description: 'The company description.',
    type: 'string'
  }),
  registration_authority: oneOf({
    description: 'The registration authority.',
    type: 'string'
  }),
  legal_entity_type: oneOf({
    description: 'The legal entity type.',
    type: 'string'
  }),
  country_of_registration: oneOf({
    description: 'The country of registration.',
    type: 'string'
  }),
  countries_of_operations: oneOf({
    description: 'The countries of operations.',
    type: 'array',
    items: {
      type: 'string'
    }
  }),
  date_of_foundation: oneOf({
    description: 'The date of foundation.',
    type: 'string'
  }),
  website: oneOf({
    description: 'The website.',
    type: 'string'
  }),
  sector: oneOf({
    description: 'The sector.',
    type: 'string'
  }),
  contacts: oneOf({
    description: 'The contacts.',
    type: 'array',
    items: {
      type: 'object'
    }
  }),
  unzer_identifier_records: oneOf({
    description: 'The unzer identifier records.',
    type: 'array',
    items: {
      type: 'object'
    }
  }),
  state: oneOf({
    description: 'The state.',
    type: 'string'
  }),
  contracts: oneOf({
    description: 'The contracts.',
    type: 'array',
    items: {
      type: 'object'
    }
  }),
  units: oneOf({
    description: 'The uuids of units.',
    type: 'array',
    items: {
      type: 'string',
      format: 'uuid'
    }
  }),
  sales_streams: oneOf({
    description: 'The uuids of sales streams.',
    type: 'array',
    items: {
      type: 'string',
      format: 'uuid'
    }
  }),
  type: oneOf({
    description: 'The type.',
    type: 'string'
  }),
  unit_unzer_id: oneOf({
    description: 'The unit unzer id.',
    type: 'string'
  })
}
