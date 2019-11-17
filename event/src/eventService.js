const EventDAO = require('./eventDAO');

class EventService {

    constructor(props){
        this.eventDAO = new EventDAO();
    };

    getById(id, cb) {
        this.eventDAO.getById({id}, cb);
    };

    create(values, cb) {
        let event = values;
        return this.eventDAO.insert({values: event}, cb);
    }

    delete(id, cb) {
        const params = {id};
        return this.eventDAO.delete({params}, cb);
    }

    update(id, values, cb) {
        const params = {id};
        let user = values;
        return this.eventDAO.update({values: user, params}, cb);
    }

    getAll(cb) {
        return this.eventDAO.getAll({}, cb);
    }
}

module.exports = EventService;