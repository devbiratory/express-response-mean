const utils = require('../utils/utils')

module.exports = app => {

  /**
   * Return a Static List of Users 1
   */
  app.get('/users', (req, res) => {
    return setTimeout(() => {
      res.status(200).json({
        success: true,
        data: [{ id: 1, name: 'lisbeth' }, { id: 1, name: 'camilla' }]
      })
    }, utils.getRandomReqTimeout())
  })
}
