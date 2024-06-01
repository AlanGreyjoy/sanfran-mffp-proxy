const router = require('express').Router({ mergeParams: true })
const foodTruckController = require('../../controllers/foodTrucks/foodTrucks.controller')

router.get('/', foodTruckController.getFoodTrucks)

module.exports = router
