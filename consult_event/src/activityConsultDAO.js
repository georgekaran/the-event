const dao = require('./database/dao');

class ActivityConsultDAO {

    constructor(props) {
        this.table = 'user_event';
    }

    getById(params, cb) {
        return dao.selectOne({table: this.table, ...params}, cb);
    };

    getEventsID(params, cb) {
        return dao.custom({ sql: `SELECT id_event as "id" from user_event where id_user_account = ${params.id} and status = 'A'`}, cb);
    };

    getEventsFull(params, cb) {
        return dao.custom({ sql: `SELECT e.*, ec.*, ue.*, uec.* from user_event ue
        inner join event e on (e.id = ue.id_event) 
        inner join event_checkin ec ON (ec.id_user_event = ue.id) 
        left join user_event_certificate uec on (uec.id_user_event = ue.id)
        where ue.id_user_account = ${params.id} and ue.status = 'A'`}, cb);
    };

    getEventsID(params, cb) {
        return dao.custom({ sql: `SELECT id_event as "id" from user_event where id_user_account = ${params.id} and status = 'A'`}, cb);
    };

    getUsersByEventId(params, cb) {
        return dao.custom({ sql: `select uc.* 
                                from user_event ue 
                                left join user_account uc on (uc.id = ue.id_user_account) where ue.id_event = ${params.id}`}, cb);
    };

    getAll(params, cb) {
        return dao.selectMany({table: this.table, ...params}, cb);
    }

}

module.exports = ActivityConsultDAO;