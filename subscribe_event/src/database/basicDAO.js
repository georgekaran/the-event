const dao = require('./dao');
const request = require('request');

const UNSUBSCRIBE_USER_EVENT_URL = 'http://localhost:5010/api'
class BasicDAO {

    constructor(table) {
        this.table = table;
    }

    getById(params, cb) {
        return dao.selectOne({table: this.table, ...params}, cb);
    };

    insert(params, cb) {
        console.log("PARAMNS", params)
        dao.custom({ sql: `select * 
        from user_event 
        where id_user_account = ${params.values.id_user_account} 
        and id_event = ${params.values.id_event}`}, (result) => {
            console.log("RESULTADO", result[0])
            if (result[0] != null) {
                this.updateActive({id_user_account: params.values.id_user_account, id_event: params.values.id_event}, cb)
            } else {
                console.log("NNAO CAIUUUUUUUUUUU", result)
                return dao.insert({table: this.table, ...params}, cb);
            }
        });
    }

    updateActive(params, cb) {
        return dao.custom({ sql: `UPDATE user_event set status = 'A' where id_user_account = ${params.id_user_account} 
        and id_event = ${params.id_user_account}`}, cb);
    }

    update(params, cb) {
        return dao.update({table: this.table, ...params}, cb);
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