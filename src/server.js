const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const util = require('../lib/util');

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: 'true',
}));

// When Url starts with api, go to the routes/api and
// look for the next param to get the correct response
app.use('/', require('./routes')(express));

// Tell the app which port to listen too.
const server = app.listen(port, () => {
  util.debug('app is running on port:', port);
});

// This will allow the test to require the server
module.exports = server;
