const express = require('express')
const bodyParser = require('body-parser')
const proxy = require('http-proxy-middleware');

class AppController {
    constructor() {
        this.express = express()
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.express.use(bodyParser.json({ limit: '2mb' }));
        this.express.use(bodyParser.urlencoded({ limit: '2mb', extended: true, parameterLimit: 2000 }));
        this.express.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
            res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
            res.header('Access-Control-Allow-Credentials', 'true');
            next();
        });
    }

    routes() {
        require('./app/controllers/v1/index')(this.express)
    }
}

module.exports = new AppController().express