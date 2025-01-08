const { oneOf } = require('../helpers/payload-or-null')

module.exports = {
  type: 'object',
  properties: {
    identifier_for_vendor: oneOf({
      type: 'string',
      description: 'Current vendor identifier regardless of value stored in keychain',
      example: 'A2700DA6-CE09-4041-9724-1313DEF295E2'
    }),
    keychain_counting_numbers: oneOf({
      type: 'string',
      description: 'Snapshot of the keychain counting numbers table',
      example: 'sale: 3, expense: 0, balance: 0, deliveryNote: 0, savedCart: 0, order: 1'
    }),
    app_info: oneOf({
      type: 'string',
      description: 'Application currently reporting',
      example: 'de.tillhub.tillhubstage.dev 1.0:0'
    }),
    os_info: oneOf({
      type: 'string',
      description: 'OS running on device',
      example: 'iPadOS 17.4'
    }),
    model_info: oneOf({
      type: 'string',
      description: 'Device hardware',
      example: 'Simulator iPad (10th generation)'
    }),
    user: oneOf({
      type: 'string',
      description: 'Login email of the user',
      format: 'email',
      example: 'm@n.de'
    }),
    sub_user: oneOf({
      type: 'string',
      description: 'Login email of the sub-user',
      format: 'email',
      example: 'm@n.de'
    })
  }
}
