const utils = require('../utils/utils')
module.exports = app => {
  /**
   * Endpoint to return some stats
   */
  return app.get('/stats', (req, res) => {
    setTimeout(() => {
      res.status(200).json({
        success: true,
        data: { id: 1, stats: 'some stats here' }
      })
    }, utils.getRandomReqTimeout())
  })
}
