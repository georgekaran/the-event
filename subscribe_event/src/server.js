const Config = require('./utils/config');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
});
/*routes*/

const apiRoute = require('./activityRegisterAPI');
app.use('/api', apiRoute);

/*end routes*/


app.get('/', (req, res) => {
    res.send({message: `Server ${Config.APP.NAME} API it's working!` });
});

module.exports = app;