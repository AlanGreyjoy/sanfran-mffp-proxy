const router = require('express').Router()

const routes = [
  { path: '/food-trucks', router: require('./foodTrunks/foodTrucks.routes') },
  { path: '/system', router: require('./system/system.routes') }
]

for (const route of routes) {
  router.use(route.path, route.router)
}

module.exports = router
