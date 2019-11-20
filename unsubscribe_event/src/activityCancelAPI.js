const express = require('express');
const ActivityCancelController = require('./activityCancelController');
const router = express.Router();

const controller = new ActivityCancelController();

router.put('/', (req, res) => {
    controller.cancel(req, res);
});

router.post('/', (req, res) => {
    controller.reativate(req, res);
});

module.exports = router;
