const { oneOf } = require('../../helpers/payload-or-null')

module.exports = {
  client_id: {
    description: 'An identifier used locally on POS for their own reference. Guaranteed to be there',
    type: 'string',
    maxLength: 128
  },
  balance_client_id: oneOf({
    type: 'string',
    maxLength: 128,
    description: 'A reference to the balance this exports belongs to. Can be omitted for archives.'
  }),
  balance_number: oneOf({
    type: 'integer',
    example: 5,
    description: 'The associated balance\'s counting number (receipt number) of this export. Can be omitted for archives.'
  }),
  branch_custom_id: oneOf({
    type: 'integer',
    example: 7,
    description: 'The branch number'
  }),
  register_custom_id: oneOf({
    type: 'integer',
    example: 11,
    description: 'The register number'
  }),
  register: {
    type: 'string',
    format: 'uuid',
    example: '9d110eb2-2245-4e14-9574-49b502f3a9b3',
    description: 'The Tillhub register location ID.'
  },
  branch: {
    type: 'string',
    format: 'uuid',
    example: '9d110eb2-2245-4e14-9574-49b502f3a9b3',
    description: 'The Tillhub branch location ID.'
  },
  export_date: {
    description: 'Date when the TSE export was stored.',
    type: 'string',
    format: 'date-time',
    example: '2019-03-17T21:12:04.849Z'
  },
  tse_serial_number: {
    description: 'TSE serial number.',
    type: 'string',
    example: 't/Fjqab/VJY0Yq3as9gAfEe2zjj3YnrjKFw4IgdU7Ls='
  },
  export: {
    type: 'object',
    properties: {
      date_start: oneOf({
        description: 'Daterange start of the export, omitted for archives.',
        type: 'string',
        format: 'date-time',
        example: '2020-10-17T08:12:04.849Z'
      }),
      date_end: {
        description: 'Daterange end of the export.',
        type: 'string',
        format: 'date-time',
        example: '2020-10-17T21:12:04.849Z'
      },
      url: oneOf({
        description: 'URL of the uploaded export tar file.',
        type: 'string',
        format: 'uri'
      }),
      type: {
        type: 'string',
        'enum': [
          'archive',
          'time_period'
        ],
        default: 'time_period'
      }
    }
  }
}
