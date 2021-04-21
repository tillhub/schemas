module.exports.query = {
  $id: 'https://schemas.tillhub.com/v0/french-cert.balances.aggregated.query.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  type: 'object',
  properties: {
    type: {
      type: 'string',
      enum: [
        'month',
        'year'
      ],
      example: 'month',
      description: 'The period type'
    },
    date: {
      type: 'string',
      format: 'date',
      example: '2021-01-03',
      description: 'The date of period (any date within the required period type) in Url safe ISO 8601 compliant format'
    },
    cashierNumber: {
      type: 'string',
      example: '007',
      description: 'The cashier number who created this balance'
    }
  },
  required: [
    'type',
    'date',
    'cashierNumber'
  ]
}

module.exports.response = {
  $id: 'https://schemas.tillhub.com/v0/french-cert.balances.aggregated.response.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: true,
  type: 'object',
  properties: {
    begin_date: {
      type: 'string',
      format: 'date-time',
      example: '2021-01-01T00:00:00.000Z',
      description: 'The begin date of requested period in ISO 8601 compliant format'
    },
    end_date: {
      type: 'string',
      format: 'date-time',
      example: '2021-01-31T23:59:59.000Z',
      description: 'The end date of requested period in ISO 8601 compliant format'
    },
    data: {
      additionalProperties: true,
      type: 'object',
      properties: {
        first_id: {
          type: 'number',
          example: '279',
          description: 'The ID of the first balance in period'
        },
        last_id: {
          type: 'number',
          example: '384',
          description: 'The ID of the last balance in period'
        },
        first_opening_date: {
          oneOf: [{
            type: 'string',
            format: 'date-time'
          }, {
            type: 'null'
          }],
          example: '2021-01-03T08:27:12.843Z',
          description: 'The date of first balance open in period in ISO 8601 format'
        },
        last_opening_date: {
          oneOf: [{
            type: 'string',
            format: 'date-time'
          }, {
            type: 'null'
          }],
          example: '2021-01-30T17:48:52.114Z',
          description: 'The date of last balance open in period in ISO 8601 format'
        },
        first_closing_date: {
          oneOf: [{
            type: 'string',
            format: 'date-time'
          }, {
            type: 'null'
          }],
          example: '2021-01-03T17:56:20.351Z',
          description: 'The date of first balance closed in period in ISO 8601 format'
        },
        last_closing_date: {
          oneOf: [{
            type: 'string',
            format: 'date-time'
          }, {
            type: 'null'
          }],
          example: '2021-01-30T18:24:04.742Z',
          description: 'The date of last balance closed in period in ISO 8601 format'
        },
        total_gross: {
          type: 'integer',
          example: 5034,
          description: 'The total revenue of period (e.g. 50.34€)'
        },
        total_vat_amount_gross: {
          type: 'integer',
          example: 235,
          description: 'The total VAT amount gross (e.g. 2.35€)'
        },
        total_vat_amount_net: {
          type: 'integer',
          example: 89,
          description: 'The total VAT amount net (e.g. 0.89€)'
        },
        currency_iso_code: {
          oneOf: [{
            type: 'string'
          }, {
            type: 'null'
          }],
          example: 'EUR',
          description: 'The ISO code of currency'
        }
      },
      description: 'Aggregated data of the period'
    },
    hash: {
      type: 'string',
      example: '0071:2,11,balance,,5a656fa4-7189-419c-9e73-51f78a37c761,N, ',
      description: 'The balance data hash (also could be mentioned as "signature" in NF525 documentation)'
    },
    signature: {
      type: 'string',
      example: '+hNYH6UgXUbUWH5p+vWkONtTD/XpEVycvouffmkzfQLLp2LRgnrtrRrjWiKMGrXXKSfVAziyYCj4v71r6LgfhQtiyg+tY4oOedFAgj+jUUf5Wp+D+HKifnpE9GmPA1tyixvYJPj4uAaJ1fjJxVKf8nzKwb1hKgLW1gBH0qqOBzbshiODBhYzEkdJ7hDkF9zdkMOGb6ARGII9OG4ouwFTsHVeOwsN4Bq4FR+NJkbNmM3o1QcHkm8zK0F6kgieTXMRnx9CZHlm+ibB4SewchAuHeIulNLcjm+xepodBGTj+i/8HCZDB06HzsnHeP+q4VWsa3aLdTrXlOUr3JDqBkzWg==',
      description: 'The balance digital signature'
    }

  },
  required: [
    'begin_date',
    'end_date',
    'data',
    'hash',
    'signature'
  ]
}
