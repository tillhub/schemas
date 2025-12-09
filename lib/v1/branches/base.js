// MMS-specific properties for v1 branches
const mmsProperties = {
  mms_id: {
    description: 'Id from mms branch',
    example: '0e3da0e5-be16-4085-964d-19655070b714',
    type: 'string'
  },
  mms_state: {
    description: 'State from mms branch',
    example: 'ACTIVE',
    type: 'string'
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

module.exports.mmsProperties = mmsProperties
