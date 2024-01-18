const express = require('express');
const router = express.Router();
const about = require('../controllers/aboutController');

router.get('/about', about.main);



module.exports = router;