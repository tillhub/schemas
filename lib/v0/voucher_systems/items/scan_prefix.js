const { oneOf } = require('../../../helpers/payload-or-null')

module.exports = {
  type: 'object',
  required: [
    'prefix',
    'name'
  ],
  additionalProperties: false,
  properties: {
    prefix: {
      description: 'The prefix to look up and remove from scan results before requesting the voucher.',
      type: 'string',
      maxLength: 16,
      example: 'bsh'
    },
    name: {
      default: null,
      ...oneOf({
        description: 'The display string for presenting the selection of available prefixes.',
        type: 'string',
        maxLength: 64,
        example: 'BSH - Marketing'
      })
    },
    display_format: {
      default: null,
      ...oneOf({
        description: '\'X\' will be filled with digits/characters from a scan result.',
        type: 'string',
        maxLength: 64,
        example: 'XXXX-XXXX-XXXX-XXXX'
      })
    },
    min_identifier_length: {
      default: null,
      ...oneOf({
        description: 'The minimum length before a lookup can be performed.',
        type: 'integer',
        minimum: 1,
        maximum: 32
      })
    }
  }
}
