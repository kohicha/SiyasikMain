const express = require('express');
const router = express.Router();
const catalog = require('../controllers/catalogController');


router.get('/catalog/page/:id', catalog.main)
router.get('/catalog/:page', catalog.catalog)
  
module.exports = router;