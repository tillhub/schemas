const { oneOf } = require('../helpers/payload-or-null')

module.exports = {
  description: 'The origin of a gastro order (table and room (if assigned))',
  type: 'object',
  properties: {
    table: oneOf({
      type: 'string',
      format: 'uuid',
      example: 'ead2351d-ea67-45f9-ad4f-0abcbefa9037',
      description: 'Id of the most recent gastro table that this process belongs to, NULL for "Bar"'
    }),
    table_name: oneOf({
      type: 'string',
      maxLength: 128,
      example: 'Table 23',
      description: 'Human readable name of the table'
    }),
    room: oneOf({
      type: 'string',
      format: 'uuid',
      example: '00d2351d-ea67-05f9-ad4f-0abcbefa903a',
      description: 'Id of the most recent gastro room that this process belongs to'
    }),
    room_name: oneOf({
      type: 'string',
      maxLength: 128,
      example: 'Garden',
      description: 'Human readable name of the room'
    })
  }
}
