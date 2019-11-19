const request = require('request');
class SyncService {

    constructor(props){
        this.userService = 'http://localhost:5001/api/';
        this.checkInService = 'http://localhost:8006/api/';
        this.eventsService = 'http://localhost:5004/api/';
    };

    createUsers(users = [], cb) {
        users.map(user => {
            user.quick = true;
            request.post(
                this.userService,
                user,
                cb
            );
        })
    }

    createCheckIns(check_ins = [], cb) {
        check_ins.map(check_in => {
            request.post(
                this.checkInService,
                check_in,
                cb
            );
        })
    }
    
    getUsers(cb){
        request.get(
            this.userService,
            cb
        )
    }

    getCheckin(cb){
        request.get(
            this.checkInService,
            cb
        )
    }

    getEvents(cb){
        request.get(
            this.eventsService,
            cb
        )
    }
}

module.exports = SyncService;

