const express = require('express');
const UserController = require('./certificateController');
const router = express.Router();

const controller = new UserController();

router.post('/', (req, res) => {
    controller.create(req, res);
});

module.exports = router;
