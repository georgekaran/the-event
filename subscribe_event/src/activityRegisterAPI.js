const express = require('express');
const ActivityRegisterController = require('./activityRegisterController');
const router = express.Router();

const controller = new ActivityRegisterController();

router.post('/', (req, res) => {
    controller.create(req, res);
});

module.exports = router;
