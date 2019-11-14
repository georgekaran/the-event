const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
    try {
        return res.send({ message: "GET USER" });
    } catch (err) {
        return res.status(400).send({ message: err, error: true })
    }
})

router.post('/', async (req, res) => {
    try {
        return res.send({ message: "POST USER" });
    } catch (err) {
        return res.status(400).send({ message: err, error: true })
    }
})

router.delete('/', async (req, res) => {
    try {
        return res.send({ message: "DELETE USER" });
    } catch (err) {
        return res.status(400).send({ message: err, error: true })
    }
})

router.put('/:id', async (req, res) => {
    try {
        return res.send({ message: "PUT USER" });
    } catch (err) {
        return res.status(400).send({ message: err, error: true })
    }
})

module.exports = app => app.use('/api/user', router)