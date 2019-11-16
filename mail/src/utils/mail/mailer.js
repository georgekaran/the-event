const nodemailer = require('nodemailer')
const Config = require('../config');

const transport = nodemailer.createTransport({
    host: Config.MAILER.HOST,
    port: Config.MAILER.PORT,
    auth: {
        user: Config.MAILER.USER,
        pass: Config.MAILER.PASS
    }
});

module.exports = transport