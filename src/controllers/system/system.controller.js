const systemService = require('../../services/system/system.service')

/**
 * Health check endpoint
 * @param {*} req
 * @param {*} res
 */
module.exports.healthCheck = async (req, res) => {
  const healthCheck = await systemService.healthCheck()

  return res.status(200).json(healthCheck)
}
