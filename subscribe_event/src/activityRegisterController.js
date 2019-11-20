const ActivityRegisterService = require('./activityRegisterService');
const requestA = require('./utils/request');
const request = require('request');

const MAIL_URL = 'http://localhost:5002/api';
const USER_URL = "http://localhost:5001/api";
const EVENT_URL = "http://localhost:5004/api";

class ActivityRegisterController {
    constructor() {
        this.activityRegisterService = new ActivityRegisterService();
    }

    create(req, res) {
        const {user, event} = req.body;
        requestA(() => {
            if(!!user && !!event) {
                this.activityRegisterService.create({
                    id_user_account: user,
                    id_event: event,
                    status: 'A'
                }, (props) => {
                    request({
                        url: USER_URL + `/${user}`,
                        method: 'GET'
                    }, 
                        function(error, response, body) {
                          console.log("CAIU");
                          const myUser = JSON.parse(response.body)
                          console.log(myUser.email)
                          request({
                                    url: MAIL_URL,
                                    method: 'POST',
                                    body: {
                                        email: myUser.email,
                                        type: "SUBSCRIPTION"
                                    },
                                    json: true
                                },
                            function(error, response, body2) {
                                console.log("CAIU 2");
                                return res.status(200).send({message: 'Event-User saved'});
                          });
                      });
                });
            } else {
                return res.status(400).send({message: 'Not a valid request'});
            }
        }, res);
    }
}
 module.exports = ActivityRegisterController;