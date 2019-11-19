const ActivityCancelService = require('./activityCancelService');
const request = require('./utils/request');

class ActivityCancelController {
    constructor() {
        this.activityCancelService = new ActivityCancelService();
    }

    cancel(req, res) {
        const id = req.params.id;
        request(() => {
            this.activityCancelService.cancel(id, (user) => {
                res.status(200).send({message: "Update successfully", user});
            })
        }, res);
    }
}
 module.exports = ActivityCancelController;