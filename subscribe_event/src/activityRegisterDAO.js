const BasicDAO = require('./database/basicDAO');

class ActivityRegisterDAO extends BasicDAO {

    constructor(props) {
        super('user_event');
    }
}

module.exports = ActivityRegisterDAO;