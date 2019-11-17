const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/*routes*/

const apiRoute = require('./eventAPI');
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
});
app.use('/api', apiRoute);

/*end routes*/


app.get('/', (req, res) => {
    res.send({message: "Server User API it's working! \\o/" });
});

module.exports = app;