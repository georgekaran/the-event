const express = require('express');
const UserController = require('./certificateController');
const router = express.Router();

const controller = new UserController();

router.post('/', (req, res) => {
    controller.create(req, res);
});

router.get('/:id', (req, res) => {
    controller.get(req, res);
});

module.exports = router;
