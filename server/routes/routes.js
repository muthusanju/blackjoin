const express = require('express');
const router = express();

const usersRoute  = require('../controller/users');
const dashboardRoute  = require('../controller/dashboard');

router.use('/', usersRoute);
router.use('/', dashboardRoute);

module.exports = router;
