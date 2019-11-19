const express = require('express');
const SyncController = require('./syncController');
const router = express.Router();

const controller = new SyncController();

router.post('/users', (req, res) => {
    controller.createUsers(req, res);
});

router.post('/checkin', (req, res) => {
    controller.createCheckIn(req, res);
});

router.get('/users', (req, res) => {
    controller.getUsers(req, res);
});

router.get('/checkin', (req, res) => {
    controller.getCheckIn(req, res);
});

router.get('/events', (req, res) => {
    controller.getEvents(req, res);
});


module.exports = router;
