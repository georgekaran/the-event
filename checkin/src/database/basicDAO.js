const dao = require('./dao');

class BasicDAO {

    constructor(table) {
        this.table = table;
    }

    getById(params, cb) {
        return dao.selectOne({table: this.table, ...params}, cb);
    };

    getByEventId(params, cb) {
        return dao.custom({
            sql: `select ec.* from event_checkin ec 
            inner join user_event ue on (ue.id = ec.id_user_event) where ue.id_event =${params.id}`
        }, cb);
    }

    insert(params, cb) {
        return dao.insert({table: this.table, ...params}, cb);
    }

    delete(params, cb) {
        return dao.delete({table: this.table, ...params}, cb);
    }

    update(params, cb) {
        return dao.update({table: this.table, ...params}, cb);
    }

    getAll(params, cb) {
        return dao.selectMany({table: this.table, ...params}, cb);
    }

}

module.exports = BasicDAO;