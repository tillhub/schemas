const commonResponse = require('../../common/response')
const { all } = require('../../v0/branches/read')

module.exports.all = {
  query: {
    ...all.query,
    properties: {
      ...all.query.properties,
      ...{
        extended: {
          description: 'Return mms branches extended information',
          example: 'true',
          type: 'string',
          enum: ['true', 'false']
        }
      }
    },
    $id: 'https://schemas.tillhub.com/v1/branches.read.all.query.schema.json'
  },
  response: {
    ...all.response,
    properties: {
      ...all.response.properties,
      ...{
        mms_id: {
          description: 'Id from mms branch',
          example: '0e3da0e5-be16-4085-964d-19655070b714',
          type: 'string'
        },
        mms_state: {
          description: 'State from mms branch',
          example: '10785',
          type: 'ACTIVE'
        },
        mms_type: {
          description: 'Type from mms branch',
          example: 'POS_BRANCH',
          type: 'string'
        },
        mms_unit_unzer_id: {
          description: 'Unit unzer id from mms branch',
          example: 'UZ4453975',
          type: 'string'
        }
      }
    },
    $id: 'https://schemas.tillhub.com/v1/branches.read.all.response.schema.json',
    ...commonResponse({
      resultItems: all.response.properties.results.items
    }, { hasCursor: true })
  }
}
