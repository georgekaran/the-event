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
                console.log("CAIUUUUUUUUUUUUU", result)
                request({
                    url: UNSUBSCRIBE_USER_EVENT_URL + "/",
                    method: 'POST',
                    body: {
                        ...params
                    },
                    json: true}, 
                    function(error, response, body2) {
                        cb();
                  })
            } else {
                console.log("NNAO CAIUUUUUUUUUUU", result)
                return dao.insert({table: this.table, ...params}, cb);
            }
        });
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