module.exports = [
  {
    type: 'input',
    name: 'name',
    message: 'What is the name of thew new schema resource?',
    validate (value, state, item, index) {
      if (value.length <= 2) {
        return 'resource should have more than 2 characters'
      }

      return true
    }
  },
  {
    type: 'input',
    name: 'version',
    message: 'What is the version level of this schema?',
    initial: 'v0'
  }
]
