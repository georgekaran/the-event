const express = require('express');
const MailController = require('./mailController');
const router = express.Router();

const controller = new MailController();

router.post('/', (req, res) => {
    controller.send(req, res);
});

module.exports = router;
