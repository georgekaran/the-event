const BasicDAO = require('./database/basicDAO');

class AuthDAO extends BasicDAO {

    constructor(props) {
        super('user_account');
    }

    getByUsername(username, cb) {
        return super.selectOne(username, cb);
    };

    getByEmail(email, cb) {
        return this.findByEmail(email, cb);
    };
}

module.exports = AuthDAO;