const mffpProxy = require('../../services/mffp/mffpProxy.service')

/**
 * Query the database for all food trucks
 * @param {*} req
 * @param {*} res
 */
module.exports.getFoodTrucks = async (req, res) => {
  const query = req.query

  console.log('Query:', query)

  const foodTrucks = await mffpProxy.getFoodTrucks(query)

  return res.status(200).json({
    length: foodTrucks.length,
    items: foodTrucks
  })
}
