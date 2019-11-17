const UserService = require('./userService');
const request = require('./utils/request');

class UserController {
    constructor() {
        this.userService = new UserService();
    }

    create(req, res) {
        const user = req.body;
        const userExist = this.userService.getByEmail(user.email, async (resp) => await resp);
        while (userExist == undefined) {}
        if (userExist.length > 0) {
            res.status(400).send({message: 'Usuário já foi cadastrado com esse email'});
        }
        request(() => {
            if(!!user) {
                this.userService.create(user, (props) => {
                    res.status(201).send({message: `Usuário ${user.name} foi inserido!`});
                });
            } else {
                return res.status(400).send({message: 'Não é um usuário valido'});
            }
        }, res);
    }

    getById(req, res) {
        const id = req.params.id;
        request(() => {
            this.userService.getById(id, (user) => {
                if(!!user){
                    res.status(200).send(user);
                } else {
                    res.status(404).send({message: `User with id ${id} not found`})
                }
            })
        }, res);
    }

    getAll(req, res) {
        request(() => {
            this.userService.getAll((userList) => {
                res.status(200).send(userList);
            })
        }, res);
    }

    update(req, res) {
        const id = req.params.id;
        const user = req.body;
        request(() => {
            this.userService.update(id, user, (user) => {
                res.status(200).send({message: "Update successfully", user});
            })
        }, res);
    }

    deleteFn(req, res) {
        const id = req.params.id;
        request(() => {
            this.userService.delete(id, (props) => {
                res.status(200).send({message: "Delete successfully"});
            })
        }, res);
    }
}
 module.exports = UserController;