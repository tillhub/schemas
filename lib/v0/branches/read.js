const baseObject = require('../../common/base')
const commonResponse = require('../../common/response')
const commonQuery = require('../../common/query')
const base = require('./base')

const extended = {
  insert_id: {
    description: 'Sequential branch index',
    type: 'integer'
  },
  fa_account_number: {
    description: 'Account number',
    oneOf: [{
      type: 'string'
    }, {
      type: 'null'
    }]
  },
  configurations: {
    description: 'Configurations set',
    oneOf: [{
      type: 'object'
    }, {
      type: 'null'
    }]
  },
  merged_configurations: {
    description: 'Merged configuration of branch and account',
    oneOf: [{
      type: 'object'
    }, {
      type: 'null'
    }]
  }
}

module.exports.all = {
  query: {
    $id: 'https://schemas.tillhub.com/v0/branches.read.all.query.schema.json',
    ...commonQuery({
      standard: ['start', 'end', 'active', 'deleted'],
      additional: {
        name: {
          description: 'Filter branches by name substring',
          example: 'Head office',
          type: 'string'
        },
        branch_group: {
          description: 'Filter branches by branch group ID',
          example: 'Head office',
          type: 'string',
          format: 'uuid'
        },
        branch_number: {
          description: 'Filter branches by number',
          example: 239,
          type: 'integer'
        },
        postal_code: {
          description: 'Filter branches by postal code',
          example: '10785',
          type: 'string'
        },
        street: {
          description: 'Filter branches by street name',
          example: 'Genthiner Str. 34',
          type: 'string'
        },
        city: {
          description: 'Filter branches by city name',
          example: 'Berlin',
          type: 'string'
        },
        q: {
          description: 'Search branches by several fields which match given string',
          example: 'head',
          type: 'string'
        },
        total: {
          description: 'Return the total count of branches (in meta data call)',
          example: 'true',
          type: 'string',
          enum: ['true', 'false']
        }
      }
    })
  },
  response: {
    $id: 'https://schemas.tillhub.com/v0/branches.read.all.response.schema.json',
    $schema: 'http://json-schema.org/draft-07/schema#',
    additionalProperties: false,
    ...commonResponse({
      resultItems: {
        type: 'object',
        additionalProperties: false,
        properties: {
          ...baseObject(),
          ...base,
          ...extended
        }
      }
    })
  }
}

module.exports.one = {
  response: {
    $id: 'https://schemas.tillhub.com/v0/branches.read.one.response.schema.json',
    $schema: 'http://json-schema.org/draft-07/schema#',
    additionalProperties: false,
    ...commonResponse({
      resultItems: {
        type: 'object',
        additionalProperties: false,
        properties: {
          ...baseObject(),
          ...base,
          ...extended
        }
      }
    })
  }
}
