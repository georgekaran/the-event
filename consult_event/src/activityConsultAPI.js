const express = require('express');
const ActivityConsultController = require('./activityConsultController');
const router = express.Router();

const controller = new ActivityConsultController();

router.get('/', (req, res) => {
    controller.getAll(req, res);
});

router.get('/:id', (req, res) => {
    controller.getById(req, res);
});

router.get('/event/subscribre/:userId', (req, res) => {
    controller.getEventsSubscribre(req, res);
});

router.get('/event/not-subscribre/:userId', (req, res) => {
    controller.getEventsNotSubscribre(req, res);
});

router.get('/not-event/user/:id', (req, res) => {
    controller.getEventsWhereUserNotIn(req, res);
});

router.get('/event/:id', (req, res) => {
    controller.getUsersByEventId(req, res);
});

module.exports = router;