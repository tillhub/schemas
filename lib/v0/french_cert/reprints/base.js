module.exports = {
  duplicate_id: {
    description: 'Identifier of the duplicate',
    example: 'c542bf0d-06db-492e-bc0f-16a7519902ca',
    type: 'string',
    format: 'uuid'
  },
  duplicate_hash: {
    description: 'Hash of the duplicate data',
    example: '0071,11,receipt,,5a656fa4-7189-419c-9e73-51f78a37c761',
    type: 'string'
  },
  duplicate_signature: {
    description: 'Electronic signature of duplicate',
    example: 'QmUgeW91cnNlbGY7IGV2ZXJ5b25lIGVsc2UgaXMgYWxyZWFkeSB0YWtlbi4=',
    type: 'string'
  },
  original_number: {
    description: 'Unique original document number',
    example: '0455937449234',
    type: 'string'
  },
  original_type: {
    description: 'Type of original document',
    example: 'receipt',
    type: 'string'
  },
  original_signature: {
    description: 'Electronic signature of original document',
    example: 'V2lzZSBtZW4gc3BlYWsgYmVjYXVzZSB0aGV5IGhhdmUgc29tZXRoaW5nIHRvIHNheTsgZm9vbHMgYmVjYXVzZSB0aGV5IGhhdmUgdG8gc2F5IHNvbWV0aGluZy4=',
    type: 'string'
  },
  issue_date: {
    description: 'Date and time of issue of the duplicate in ISO 8601 compliant format',
    example: '2021-05-07T13:17:27.006Z',
    type: 'string',
    format: 'date-time'
  },
  number: {
    description: 'Reprint number',
    example: '3',
    type: 'number'
  },
  operator_code: {
    description: 'Operator code issuing the duplicate (staff number)',
    example: 'cashier-7',
    type: 'string'
  },
  reason: {
    description: 'Reason for issuing the duplicate',
    example: 'Client lost the original',
    type: 'string'
  },
  software_version: {
    description: 'Software version',
    example: 'Tillhub POS 0.19.2',
    type: 'string'
  }
}
