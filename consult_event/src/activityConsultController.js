const ActivityConsultService = require('./activityConsultService');
const requestA = require('./utils/request');
const request = require('request');


function populateUserInfo(activity, client) {
    delete activity.id_client;
    activity.client = client;
}

function populateEventInfo(activity, event) {
    delete activity.id_event;
    activity.event = event;
}

class ActivityConsultController {
    constructor() {
        this.activityConsultService = new ActivityConsultService();
    }

    getById(req, res) {
        const id = req.params.id;
        requestA(() => {
            this.activityConsultService.getById(id, (activity) => {
                if(!!activity) {
                    this.getAdditionalInfo(activity, res, () => {
                        res.status(200).send(activity);
                    })
                } else {
                    res.status(404).send({message: `Activity with id ${id} not found`})
                }
            })
        }, res);
    }

    async getEventsSubscribre(req, res) {
        const context = this;
        const userId = req.params.userId;
        console.log(userId)
        this.activityConsultService.getEventsSubscribre(userId, (activity) => {
            console.log(activity);
            if(!!activity) {
                // const response = await request.post('http://localhost:5004/api/', activity);
                // let events = []
                res.status(200).send(activity);
            } else {
                res.status(404).send({message: `Events with id_user ${userId} not found`})
            }
        })
    }

    getEventsWhereUserNotIn(req, res) {
        const userId = req.params.id;
        requestA(() => {
            this.activityConsultService.getById(id, (activity) => {
                if(!!activity) {
                    this.getAdditionalInfo(activity, res, () => {
                        res.status(200).send(activity);
                    })
                } else {
                    res.status(404).send({message: `Activity with id ${id} not found`})
                }
            })
        }, res);
    }

    getUsersByEventId(req, res) {
        const id = req.params.id;
        requestA(() => {
            this.activityConsultService.getUsersByEventId(id, (users) => {
                if(!!users) {
                    res.status(200).send(users);
                } else {
                    res.status(404).send({message: `Activity with id ${id} not found`})
                }
            })
        }, res);
    }

    getAll(req, res) {
        requestA(() => {
            this.activityConsultService.getAll((activityList) => {
                for (const activity of activityList) {
                    this.getAdditionalInfo(activity, res, () => {});
                }
                //MIAUUUUUUUUUUUUUUUUU
                setTimeout(function() {
                    res.status(200).send(activityList);
                }, 1000)
            })
        }, res);
    }

    getAdditionalInfo(activity, res, cb) {
        this.activityConsultService.getEventInfo(activity.id_event, (error, response, body) => {
            if (response.statusCode >= 200 && response.statusCode < 300) {
                populateEventInfo(activity, JSON.parse(body));
                this.activityConsultService.getUserInfo(activity.id_client, (error, response, body) => {
                    if (response.statusCode >= 200 && response.statusCode < 300) {
                        populateUserInfo(activity, JSON.parse(body));
                        cb();
                    } else {
                        console.log('user: ', error);
                        res.status(500).send({message: "An error as occur on this request. Please, try later"});
                    }
                });
            } else {
                console.log('event: ', error);
                res.status(500).send({message: "An error as occur on this request. Please, try later"});
            }
        });
    }
}
 module.exports = ActivityConsultController;