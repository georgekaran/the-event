const MailService = require('./mailService');
const MailTemplate = require('./utils/mail/MailTemplate');
const mailer = require("./utils/mail/mailer");
const request = require('./utils/request');

class MailController {
    constructor() {
        this.mailService = new MailService();
    }

    async send(req, res) {
        console.log("BODY", req.body);
        const type = req.body.type;
        let template = {};
        switch (type) {
            case "SUBSCRIPTION":
                template = MailTemplate.SUBSCRIPTION();
                break;
            case "UNSUBSCRIPTION": 
                template = MailTemplate.UNSUBSCRIPTION();
                break;
            case "ATTENDANCE":
                template = MailTemplate.ATTENDANCE();
                break;
            case "CERTIFICATE_ISSUE":
                template = MailTemplate.CERTIFICATE_ISSUE();
                break;
            default:
                template = MailTemplate.SUBSCRIPTION();
                break;
        }
        console.log(req.body, template)
        await mailer.sendMail({
            to: req.body.email,
            from: "george.mueller@universo.univates.br",
            subject: template.title,
            html: template.body
        });
        return res.status(200).send({ message: "Email enviado com sucesso!" });
    }
}
 module.exports = MailController;