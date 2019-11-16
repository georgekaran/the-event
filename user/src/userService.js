const bcrypt = require('bcrypt');
const UserDAO = require('./userDAO');

class UserService {

    constructor(props){
        this.userDAO = new UserDAO();
    };

    static encrypt(string) {
        return bcrypt.hashSync(string, 10);
    }

    getById(id, cb) {
        this.userDAO.getById({id, fields: ['id', 'name', 'email']}, cb);
    };

    create(values, cb) {
        let user = values;
        user.password = UserService.encrypt(values.password);
        return this.userDAO.insert({values: user}, cb);
    }

    delete(id, cb) {
        const params = {id};
        return this.userDAO.delete({params}, cb);
    }

    update(id, values, cb) {
        const params = {id};
        let user = values;
        if(!!values.password) {
            user.password = UserService.encrypt(values.password);
        }
        return this.userDAO.update({values: user, params}, cb);
    }

    getAll(cb) {
        return this.userDAO.getAll({fields: ['id', 'name', 'email']}, cb);
    }
}

module.exports = UserService;

