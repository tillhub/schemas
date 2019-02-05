module.exports = {
  type: 'object',
  properties: {
    expense_note_required: {
      type: 'boolean',
      default: false
    },
    deposit_note_required: {
      type: 'boolean',
      default: false
    },
    bank_note_required: {
      type: 'boolean',
      default: false
    },
    keep_change_suggestion: {
      description: 'Will suggest balance expenses so that this amount is kept as change in the register, will not block overriding',
      type: 'number',
      minimum: 0,
      maximum: 1000000,
      multipleOf: 0.01
    },
    low_cash_threshold: {
      description: 'Will pop a warning when register cash runs low',
      type: 'number',
      minimum: 0,
      maximum: 1000000,
      multipleOf: 0.01
    }
  }
}
