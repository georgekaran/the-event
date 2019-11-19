const EventDAO = require('./eventDAO');

class EventService {

    constructor(props){
        this.eventDAO = new EventDAO();
    };

    getById(id, cb) {
        this.eventDAO.getById({id}, cb);
    };

    findEventsById(ids, cb) {
        console.log(ids)
        this.eventDAO.findEventsById(ids, cb);
    }

    findEventsNotInId(ids, cb) {
        console.log(ids)
        this.eventDAO.findEventsNotInId(ids, cb);
    }

    getByUserId(id, cb) {
        this.eventDAO.getByUserId({id}, cb);
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