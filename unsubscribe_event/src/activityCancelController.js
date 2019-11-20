const ActivityCancelService = require('./activityCancelService');
const requestA = require('./utils/request');
const request = require('request');

const MAIL_URL = 'http://localhost:5002/api';
const USER_URL = "http://localhost:5001/api";
const EVENT_URL = "http://localhost:5004/api";
class ActivityCancelController {
    constructor() {
        this.activityCancelService = new ActivityCancelService();
    }

    cancel(req, res) {
        const user_event = req.body;
        requestA(() => {
            this.activityCancelService.cancel(user_event, (user) => {
                request({
                    url: USER_URL + `/${user_event.id_user_account}`,
                    method: 'GET'
                }, 
                    function(error, response, body) {
                      const myUser = JSON.parse(response.body)
                      console.log(myUser.email)
                      request({
                                url: MAIL_URL,
                                method: 'POST',
                                body: {
                                    email: myUser.email,
                                    type: "UNSUBSCRIPTION"
                                },
                                json: true
                            },
                        function(error, response, body2) {
                            res.status(200).send({message: "Update successfully", user});
                      });
                  });
            })
        }, res);
    }

    reativate(req, res) {
        const user_event = req.body;
        requestA(() => {
            this.activityCancelService.reativate(user_event, (user) => {
                res.status(200).send({message: "Update successfully", user});
            })
        }, res);
    }
}
module.exports = ActivityCancelController;