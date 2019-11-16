const CheckinDAO = require('./checkinDAO');

class CheckinService {

    constructor(props){
        this.checkinDAO = new CheckinDAO();
    };

    getById(id, cb) {
        this.checkinDAO.getById({id, fields: ['id', 'id_user_event', 'date']}, cb);
    };

    getByEventId(id, cb) {
        this.checkinDAO.getByEventId({id, fields: ['id', 'id_user_event', 'date']}, cb);
    }

    create(values, cb) {
        let checkin = values;
        checkin.date = new Date();
        return this.checkinDAO.insert({values: checkin}, cb);
    }

    delete(id, cb) {
        const params = {id};
        return this.checkinDAO.delete({params}, cb);
    }

    update(id, values, cb) {
        const params = {id};
        let user = values;
        if(!!values.password) {
            user.password = UserService.encrypt(values.password);
        }CheckinDAO
        return this.checkinDAO.update({values: user, params}, cb);
    }

    getAll(cb) {
        return this.checkinDAO.getAll({fields: ['id', 'id_user_event', 'date']}, cb);
    }
}

module.exports = CheckinService;