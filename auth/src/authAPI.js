const express = require('express');
const AuthController = require('./authController');
const router = express.Router();

router.post('/login', (req, res) => {
    return AuthController.login(req, res);
});

router.get('/logout', (req, res) => {
    return AuthController.logout(res);
});

module.exports = router;
