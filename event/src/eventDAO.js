const dao = require('./database/database');
const BasicDAO = require('./database/basicDAO');

class EventDAO extends BasicDAO {

    constructor(props) {
        super('event');
    }
}

module.exports = EventDAO;