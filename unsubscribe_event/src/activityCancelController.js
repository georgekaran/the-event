const ActivityCancelService = require('./activityCancelService');
const request = require('./utils/request');

class ActivityCancelController {
    constructor() {
        this.activityCancelService = new ActivityCancelService();
    }

    cancel(req, res) {
        const user_event = req.body;
        request(() => {
            this.activityCancelService.cancel(user_event, (user) => {
                res.status(200).send({message: "Update successfully", user});
            })
        }, res);
    }

    reativate(req, res) {
        const user_event = req.body;
        request(() => {
            this.activityCancelService.reativate(user_event, (user) => {
                res.status(200).send({message: "Update successfully", user});
            })
        }, res);
    }
}
module.exports = ActivityCancelController;