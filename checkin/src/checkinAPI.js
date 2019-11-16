const express = require('express');
const CheckinController = require('./checkinController');
const router = express.Router();

const controller = new CheckinController();

router.post('/', (req, res) => {
    controller.create(req, res);
});

router.get('/', (req, res) => {
    controller.getAll(req, res);
});

router.get('/event/:id', (req, res) => {
    controller.getByEventId(req, res);
});

router.get('/:id', (req, res) => {
    controller.getById(req, res);
});

router.put('/:id_user_event', (req, res) => {
    controller.update(req, res);
});

router.delete('/:id', (req, res) => {
    controller.deleteFn(req, res);
});

module.exports = router;
