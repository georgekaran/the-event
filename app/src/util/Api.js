import axios from 'axios';

const AUTH_URL = 'http://localhost:5000/api'
const USER_URL = 'http://localhost:5001/api'
const EVENT_URL = 'http://localhost:5003/api'
const EMAIL_URL = 'http://localhost:5002/api'


class Auth {

    static signin(data) {
        axios.post(AUTH_URL + "/login", data)
            .then(resp => {
                console.log(resp);
            }).catch(e => {
                console.log(e);
            })
    }
}

class User {

    static create(data) {
        axios.post(USER_URL + "/", data)
            .then(resp => {
                console.log(resp);
            }).catch(e => {
                console.log(e);
            })
    }
}

export default class Api {

    static auth = Auth;
    static user = User;
}