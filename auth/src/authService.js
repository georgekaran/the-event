const Security = require('./security');
const AuthDAO = require('./authDAO');


function validateLogin(credentials, user, res) {
    if (!!user && Security.compareEncryptPassword({
        encryptPassword: user.password,
        password: credentials.password
    })) {
        res.cookie(Security.jwt_name, Security.generateJWT(user), {httpOnly: true});
        delete user.password;
        delete user.active;
        res.send({user});
    } else {
        res.status(403).send({message: 'Credentials not valid'});
    }
}

class AuthService {

    constructor(props){
        this.authDAO = new AuthDAO();
    }

    emailLogin(credentials, res) {
        this.authDAO.getByEmail(credentials.email, (user) => {
            validateLogin(credentials, user, res);
        });
    }
}

module.exports = AuthService;

