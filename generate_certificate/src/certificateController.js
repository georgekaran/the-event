const CertificateService = require('./certificateService');
const request = require('request');
const requestCustom = require('./utils/request');

const chave = 'certificado_bo_do_catarina';

const CHECKIN_URL = 'http://localhost:5003/api'

class CertificateController {
    constructor() {
        this.certificateService = new CertificateService();
    }

    create(req, res) {
        const eventCertificate = req.body;
        let checkin = undefined;
        const context = this;
        return request.get(CHECKIN_URL + `/${eventCertificate.id_user_event}`, function(error, response, body) {
            if (response.statusCode === 200) {
                checkin = JSON.parse(body);
                return requestCustom(() => {
                    if(!!eventCertificate) {
                        return context.certificateService.create(eventCertificate, (props) => {
                           return res.status(201).send({message: `Certificado gerado com sucesso!`});
                        });
                    } else {
                        return res.status(400).send({message: 'Não há informações validas'});
                    }
                }, res)
            } else {
                return res.status(403).send({message: 'Não pode gerar certificado'});
            }
        })
    }
}
 module.exports = CertificateController;