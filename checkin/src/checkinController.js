const CheckinService = require('./checkinService');
const request = require('./utils/request');

class CheckinController {
    constructor() {
        this.checkinService = new CheckinService();
    }

    create(req, res) {
        const checkin = req.body;
        request(() => {
            if(!!checkin) {
                this.checkinService.create(checkin, (props) => {
                    res.status(201).send({message: `Checkin inserted!`});
                });
            } else {
                return res.status(400).send({message: 'Not a valid id_user_event'});
            }
        }, res);
    }

    getById(req, res) {
        const id = req.params.id;
        request(() => {
            this.checkinService.getById(id, (user) => {
                if(!!user){
                    res.status(200).send(user);
                } else {
                    res.status(404).send({message: `User with id ${id} not found`})
                }
            })
        }, res);
    }

    getByEventId(req, res) {
        const id = req.params.id;
        request(() => {
            this.checkinService.getByEventId(id, (user) => {
                if(!!user){
                    res.status(200).send(user);
                } else {
                    res.status(404).send({message: `User with id ${id} not found`})
                }
            })
        }, res);
    }

    getAll(req, res) {
        request(() => {
            this.checkinService.getAll((userList) => {
                res.status(200).send(userList);
            })
        }, res);
    }

    update(req, res) {
        const id = req.params.id;
        const user = req.body;
        request(() => {
            this.checkinService.update(id, user, (user) => {
                res.status(200).send({message: "Update successfully", user});
            })
        }, res);
    }

    deleteFn(req, res) {
        const id = req.params.id;
        request(() => {
            this.checkinService.delete(id, (props) => {
                res.status(200).send({message: "Delete successfully"});
            })
        }, res);
    }
}
 module.exports = CheckinController;