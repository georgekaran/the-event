const dao = require('./database/database');
const BasicDAO = require('./database/basicDAO');

class CertificateDAO extends BasicDAO {

    constructor(props) {
        super('user_event_certificate');
    }
}

module.exports = CertificateDAO;