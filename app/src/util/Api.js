import axios from 'axios';

const AUTH_URL = 'http://localhost:5000/api'
const USER_URL = 'http://localhost:5001/api'
const EVENT_URL = 'http://localhost:5004/api'
const EMAIL_URL = 'http://localhost:5002/api'
const USER_EVENT_URL = 'http://localhost:5012/api'


class Auth {

    static login(data) {
        return axios.post(AUTH_URL + "/login", data)
            .then(resp => {
                console.log(resp);
                return resp;
            }).catch(e => {
                console.log(e);
                return e;
            })
    }
}

class User {

    static create(data) {
        axios.post(USER_URL + "/", data)
            .then(resp => {
                console.log(resp);
                return resp;
            }).catch(e => {
                console.log(e);
                return e;
            })
    }
}

class Event {

    static getAll() {
        return axios.get(EVENT_URL + "/")
            .then(resp => {
                console.log(resp);
                return resp;
            }).catch(e => {
                console.log(e);
                return e;
            })
    }

    static getEventsByUser(id) {
        return axios.get(EVENT_URL + `/user/${id}`)
            .then(resp => {
                console.log(resp);
                return resp;
            }).catch(e => {
                console.log(e);
                return e;
            })
    }
}

class UserEvent {
    static create(data) {
        return axios.post(USER_EVENT_URL + "/", data)
            .then(resp => {
                console.log(resp);
                return resp;
            }).catch(e => {
                console.log(e);
                return e;
            })
    }
}

export default class Api {

    static auth = Auth;
    static user = User;
    static event = Event;
    static userEvent = UserEvent;
}