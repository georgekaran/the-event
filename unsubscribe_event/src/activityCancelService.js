const ActivityCancelDAO = require('./activityCancelDAO');

class ActivityCancelService {

    constructor(props){
        this.activityCancelDAO = new ActivityCancelDAO();
    };

    cancel(id, cb) {
        const params = {id};
        return this.activityCancelDAO.update({values: {status: 'C'}, params}, cb);
    }
}

module.exports = ActivityCancelService;

