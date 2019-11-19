const Config = require('./utils/config');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/*routes*/

const apiRoute = require('./syncAPI');
app.use('/api', apiRoute);

/*end routes*/


app.get('/', (req, res) => {
    res.send({message: `Server ${Config.APP.NAME} API it's working!` });
});

module.exports = app;