const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');
const {isLoggedIn} = require('../middleware/checkAuth')


router.get('/dashboard', ensureAuthenticated, dashboardController.dashboard);


function ensureAuthenticated(req, res, next) {
    if (req.session.user) {
        return next();
    }
    res.redirect('/');
}

module.exports = router;