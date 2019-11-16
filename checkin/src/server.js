const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/*routes*/

const apiRoute = require('./checkinAPI');
app.use('/api', apiRoute);

/*end routes*/


app.get('/', (req, res) => {
    res.send({message: "Server User API it's working! \\o/" });
});

module.exports = app;