const {handelUserLogin,handelUserSignUp} = require('../controller/user');
const {handelLoginUid} = require('../middlewares/auth');
const {User} = require('../models/user')
const express = require('express');
const router = express.Router();
router.post('/',handelUserSignUp);
router.post('/login',handelUserLogin);

module.exports = router;