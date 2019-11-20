const ActivityCancelDAO = require('./activityCancelDAO');

class ActivityCancelService {

    constructor(props){
        this.activityCancelDAO = new ActivityCancelDAO();
    };

    cancel(user_event, cb) {
        const params = { id_user_account: user_event.id_user_account, id_event: user_event.id_event };
        return this.activityCancelDAO.update({values: {status: 'C'}, params}, cb);
    }

    reativate(user_event, cb) {
        const params = { id_user_account: user_event.id_user_account, id_event: user_event.id_event };
        return this.activityCancelDAO.update({values: {status: 'A'}, params}, cb);
    }
}

module.exports = ActivityCancelService;

