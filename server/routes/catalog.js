const express = require('express');
const router = express.Router();
const catalog = require('../controllers/catalogController');

router.get('/catalog/:page', catalog.main);
router.get('/catalog/:id', catalog.catalog)


module.exports = router;