const { oneOf } = require('../../../helpers/payload-or-null')

module.exports = {
  type: 'object',
  properties: {
    barcode: oneOf({
      type: 'object',
      description: 'Defines specific bahviors for barcode usage and generation, e.g. for BSH',
      properties: {
        source: oneOf({
          description: 'Defines how the transaction barcode field will be set - this will get printed at the bottom of a receipt.',
          type: 'string',
          enum: [
            'generate', // default Tillhub style, e.g. RTEA33D915 - which supports also API lookup
            'external_reference_id' // any external ID comimng from e.g. carts or manual entry, BSH: 1111728444 or even UUIDs - API lookup not guaranteed, printing for UUIDs not possible
          ],
          default: 'generate' // -> BSH needs to be specifically set to get their current behavior
        })
      }
    }),
    cross_register_refunding: oneOf({
      description: 'Allows refunding transactions from different registers in the same branch',
      type: 'boolean',
      default: false
    }),
    cross_branch_refunding: oneOf({
      description: 'Allows refunding transactions from different branches',
      type: 'boolean',
      default: false
    }),
    refund_reason_required: oneOf({
      type: 'boolean',
      description: 'Defines if reasons are mandatory for refunding items from a previous transaction',
      default: true
    }),
    signing: oneOf({
      type: 'object',
      description: 'Decides if and how transactions will be fiscally signed and where the specific configuration can be found',
      properties: {
        type: {
          description: 'The fiscal signing type to use, e.g. Fiskaltrust in Austria or EposnTSE in Germany',
          type: 'string',
          enum: [
            'fiskaltrust',
            'tse_fiskaly',
            'tse_epson',
            'fr_NF525',
            'it_epson'
          ]
        },
        resource_type: {
          description: 'Decides where the specific device configuration will be looked up',
          type: 'string',
          enum: [
            'branches', // details will be in v0/branches.signing_configuration
            'registers' // details will be in v1/registers.device_configuration.fiscal_signing
          ]
        }
      }
    }),
    history: oneOf({
      type: 'object',
      properties: {
        range: oneOf({
          description: 'Transactions created before (Now() - Range) are not guaranteed to be kept on the client (e.g. older ones will be deleted).',
          type: 'object',
          properties: {
            unit: {
              description: 'Unit of the range.',
              type: 'string',
              enum: [
                'hours',
                'days',
                'weeks',
                'months',
                'years'
              ],
              default: 'months'
            },
            value: {
              description: 'The value of the range, defines a timeframe together with the set unit.',
              type: 'integer',
              minimum: 1,
              maximum: 500,
              default: 2
            }
          }
        }),
        max_count: oneOf({
          description: 'Maximum number of transactions that are kept on the client.',
          type: 'integer',
          minimum: 1,
          maximum: 75000,
          default: 20000
        })
      }
    })
  }
}
