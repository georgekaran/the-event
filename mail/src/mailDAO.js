const dao = require('./database/database');
const BasicDAO = require('./database/basicDAO');

class MailDAO extends BasicDAO {

    constructor(props) {
        super('email');
    }
}

module.exports = MailDAO;