const express = require('express')
const appRoutes = require('./app/index.route');
const router = express.Router();

router.use('/api/app',appRoutes)

// router.use('/api/admin',)
module.exports = router
// export default router