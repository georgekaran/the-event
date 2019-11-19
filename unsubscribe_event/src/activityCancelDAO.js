const BasicDAO = require('./database/basicDAO');

class ActivityCancelDAO extends BasicDAO {

    constructor(props) {
        super('user_event');
    }
}

module.exports = ActivityCancelDAO;