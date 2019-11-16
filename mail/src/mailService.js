const bcrypt = require('bcrypt');
const MailDAO = require('./mailDAO');

class MailService {

    constructor(props){
        this.mailDAO = new MailDAO();
    };

    send(values, cb) {
        let user = values;
        return this.mailDAO.insert({values: user}, cb);
    }
}

module.exports = MailService;

