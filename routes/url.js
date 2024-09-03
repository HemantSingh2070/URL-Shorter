const express = require('express');
const router = express.Router();
const {urlShortner,urlsearch} = require('../controller/url')
router.post('/create',urlShortner);
router.get('/find/:shortURL',urlsearch);

module.exports = router;