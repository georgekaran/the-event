const dao = require('./database/database');
const BasicDAO = require('./database/basicDAO');

class CheckinDAO extends BasicDAO {

    constructor(props) {
        super('event_checkin');
    }
}

module.exports = CheckinDAO;