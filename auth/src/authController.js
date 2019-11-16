const Security = require('./security');
const AuthService = require('./authService');


class AuthController {
    static login(req, res){
        const authService = new AuthService();
        const credentials = req.body;
        console.log(credentials)
        if (credentials == null) {
            return res.status(400).send({ message: "Campos obrigátorios não informados "});
        }
        authService.emailLogin(credentials, res);
    }

    static logout(res){
        res.clearCookie(Security.jwt_name);
        res.sendStatus(200);
    }
}
 module.exports = AuthController;