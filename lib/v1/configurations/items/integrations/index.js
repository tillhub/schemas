module.exports = {
  type: 'object',
  properties: {
    mailjet: {
      oneOf: [
        {
          type: 'null'
        },
        require('./mailjet')
      ]
    }
  }
}
