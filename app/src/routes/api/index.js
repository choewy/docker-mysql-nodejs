"use strict";

const router = require('express').Router();
const controller = require('./controller');

router.get('/users', controller.process.users);

module.exports = router;