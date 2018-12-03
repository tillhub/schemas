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
    }
  }
}
