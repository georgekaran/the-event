const dao = require('./dao');

class BasicDAO {

    constructor(table) {
        this.table = table;
    }

    getById(params, cb) {
        return dao.selectOne({table: this.table, params}, cb);
    };

    getByUserId(params, cb) {
        return dao.custom({sql: 'SELECT e.* from event e' + 
                                ' inner join user_event ue on (e.id = ue.id_event)' 
                                + ` where ue.id_user_account = ${params.id}`}, cb);
    };

    findEventsById(params, cb) {
        return dao.custom({sql: 'SELECT * FROM event WHERE id = ANY($1::int[])', values: [params]}, cb);
    };

    findEventsNotInId(params, cb) {
        return dao.custom({sql: 'SELECT * FROM event WHERE id <> ANY($1::int[])', values: [params]}, cb);
    };

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