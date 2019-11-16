const dao = require('./database/database');
const BasicDAO = require('./database/basicDAO');

class UserDAO extends BasicDAO {

    constructor(props) {
        super('user_account');
    }
}

module.exports = UserDAO;