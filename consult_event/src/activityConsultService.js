const ActivityConsultDAO = require('./activityConsultDAO');
const request = require('request');

class ActivityConsultService {

    constructor(props){
        this.userService = 'http://localhost:5001/api/';
        this.eventsService = 'http://localhost:5004/api/';
        this.activityConsultDAO = new ActivityConsultDAO();
    };

    getById(id, cb) {
        this.activityConsultDAO.getById({params: {id}}, cb);
    };

    getEventsSubscribre(id, cb) {
        this.activityConsultDAO.getEventsID({id}, cb);
    }

    getUsersByEventId(id, cb) {
        this.activityConsultDAO.getUsersByEventId({ id }, cb);
    }

    getUserInfo(id, cb){
        request.get(
            this.userService + "/" + id ,
            cb
        )
    }

    getEventInfo(id, cb){
        request.get(
            this.eventsService + "/" + id,
            cb
        )
    }

    getAll(cb) {
        return this.activityConsultDAO.getAll({}, cb);
    }

}

module.exports = ActivityConsultService;

