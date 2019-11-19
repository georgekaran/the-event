const ActivityRegisterService = require('./activityRegisterService');
const request = require('./utils/request');

class ActivityRegisterController {
    constructor() {
        this.activityRegisterService = new ActivityRegisterService();
    }

    create(req, res) {
        const {user, event} = req.body;
        request(() => {
            if(!!user && !!event) {
                this.activityRegisterService.create({
                    id_user_account: user,
                    id_event: event,
                    status: 'A'
                }, (props) => {
                    res.status(201).send({message: `User-Event has been created!`});
                });
            } else {
                return res.status(400).send({message: 'Not a valid request'});
            }
        }, res);
    }
}
 module.exports = ActivityRegisterController;