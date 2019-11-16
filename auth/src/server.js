const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/*routes*/

const apiRoute = require('./authAPI');
app.use('/api', apiRoute);

/*end routes*/


app.get('/', (req, res) => {
    res.send({message: "Server Authentication API it's working! \\o/" });
});

module.exports = app;