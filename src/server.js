const express     = require('express');
const body_parser = require('body-parser');
const app         = express();


var port = process.env.PORT || 3000;

app.use(body_parser.json());
app.use(body_parser.urlencoded({
    extended: "true",
}));

// When Url starts with api, go to the routes/api and
// look for the next param to get the correct response
app.use("/", require('./routes')(express));

// Tell the app which port to listen too.
var server = app.listen(port, () => {
  console.log('app is running on port:', port);
});


// This will allow the test to require the server
module.exports = server;