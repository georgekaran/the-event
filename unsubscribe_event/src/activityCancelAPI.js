const express = require('express');
const ActivityCancelController = require('./activityCancelController');
const router = express.Router();

const controller = new ActivityCancelController();

router.put('/:id', (req, res) => {
    controller.cancel(req, res);
});

module.exports = router;
