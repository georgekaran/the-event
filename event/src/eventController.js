const EventService = require('./eventService');
const request = require('./utils/request');

class EventController {
    constructor() {
        this.eventService = new EventService();
    }

    create(req, res) {
        const event = req.body;
        request(() => {
            if(!!event) {
                this.eventService.create(event, (props) => {
                    res.status(201).send({message: `Event ${event.name} has been created!`});
                });
            } else {
                return res.status(400).send({message: 'Not a valid event'});
            }
        }, res);
    }

    getById(req, res) {
        const id = req.params.id;
        console.log(id);
        request(() => {
            this.eventService.getById(id, (event) => {
                if(!!event){
                    res.status(200).send(event);
                } else {
                    res.status(404).send({message: `Event with id ${id} not found`})
                }
            })
        }, res);
    }

    getAll(req, res) {
        request(() => {
            this.eventService.getAll((eventList) => {
                res.status(200).send(eventList);
            })
        }, res);
    }

    update(req, res) {
        const id = req.params.id;
        const event = req.body;
        request(() => {
            this.eventService.update(id, event, (user) => {
                res.status(200).send({message: "Update successfully", event});
            })
        }, res);
    }

    deleteFn(req, res) {
        const id = req.params.id;
        request(() => {
            this.eventService.delete(id, (props) => {
                res.status(200).send({message: "Delete successfully"});
            })
        }, res);
    }
}
 module.exports = EventController;