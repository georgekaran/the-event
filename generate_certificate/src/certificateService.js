const bcrypt = require('bcrypt');
const CertificateDAO = require('./certificateDAO');

const chave = 'certificado_bo_do_catarina';

class CertificateService {

    constructor(props){
        this.certificateDAO = new CertificateDAO();
    };

    static encrypt(string) {
        return bcrypt.hashSync(chave + string, 10);
    }

    getById(id, cb) {
        this.certificateDAO.getById({params: {id}}, cb);
    };

    getByUserEventId(id_user_event, cb) {
        this.certificateDAO.getByUserEventId({id_user_event}, cb);
    };

    create(values, cb) {
        let checkin = values;
        checkin.auth = CertificateService.encrypt(checkin.id_user_event);
        checkin.title = 'CERTIFICADO TOP';
        checkin.body = 'Você foi certificado por participar';
        return this.certificateDAO.insert({values: checkin}, cb);
    }

    delete(id, cb) {
        const params = {id};
        return this.certificateDAO.delete({params}, cb);
    }

    update(id, values, cb) {
        const params = {id};
        let certificate = values;
        return this.certificateDAO.update({values: certificate, params}, cb);
    }

    getAll(cb) {
        return this.certificateDAO.getAll({}, cb);
    }
}

module.exports = CertificateService;

