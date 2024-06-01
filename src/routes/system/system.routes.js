const router = require('express').Router({ mergeParams: true })

router.get('/health', require('../../controllers/system/system.controller').healthCheck)

module.exports = router
