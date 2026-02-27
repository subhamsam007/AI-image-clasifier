const express = require('express');
const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken');
const authController = require('../controller/auth.controller');

const router = express.Router();


/*
post/register
post/login
get/ueser{protected }
*/

router.post('/register', authController.register);
router.post('/login', authController.login);






module.exports = router;