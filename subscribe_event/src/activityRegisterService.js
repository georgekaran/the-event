const ActivityRegisterDAO = require('./activityRegisterDAO');

class ActivityRegisterService {

    constructor(props){
        this.activityRegisterDAO = new ActivityRegisterDAO();
    };

    create(values, cb) {
        return this.activityRegisterDAO.insert({values}, cb);
    }
}

module.exports = ActivityRegisterService;

