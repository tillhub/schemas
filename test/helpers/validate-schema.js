const Ajv = require('ajv')
const metaSchema = require('./meta-schema')
const ajv = new Ajv()

module.exports = (object) => {
  const validate = ajv.compile(metaSchema)
  const valid = validate(object)
  if (valid) {
    return { valid: valid, error: null }
  }
  return { valid: false, error: validate.errors }
}
