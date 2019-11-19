const SyncService = require('./syncService');
const request = require('./utils/request');

class SyncController {
    constructor() {
        this.syncService = new SyncService();
    }

    createUsers(req, res) {
        const users = req.body.users;
        request(() => {
            if(!!users && users.length > 0) {
                this.syncService.createUsers(users, () => {
                    res.status(201).send({message: "Data sync successfully!"});
                });
            }
        }, res);
    }

    createCheckIn(req, res) {
        const check_ins = req.body.check_ins;
        request(() => {
            if(!!check_ins && check_ins.length > 0) {
                this.syncService.createCheckIns(check_ins, () => {
                    res.status(201).send({message: "Data sync successfully!"});
                });
            }
        });
    }

    getUsers(req, res) {
        request(() => {
            this.syncService.getUsers((error, response, body) => {
                if(response.statusCode >= 200 && response.statusCode < 300) {
                    res.status(200).send(JSON.parse(body));
                } else {
                    console.log(error);
                    res.status(500).send({message: "An error as occur on this request. Please, try later"});
                }
            })
        })
    }

    getCheckIn(req, res) {
        request(() => {
            this.syncService.getCheckin((error, response, body) => {
                res.status(200).send(JSON.parse(body));
            })
        })
    }

    getEvents(req, res) {
        request(() => {
            this.syncService.getEvents((error, response, body) => {
                res.status(200).send(JSON.parse(body));
            })
        })
    }
}
 module.exports = SyncController;