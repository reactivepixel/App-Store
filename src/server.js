var express   = require('express'),
    body_parser = require('body-parser'),
    app       = express();

// When Url starts with api, go to the routes/api and
// look for the next paramter to get the correct response
app.use("/api", require('./routes/api.js')(express));

// Root response
app.get('/', function (req, res) {
    res.json({"hello": "World"})
})

var port = 3000;

// Tell the app which port to listen too.
var server = app.listen(port, function() {
  console.log('app is running on port:', port);
});

// This will allow the test to require the server
module.exports = server;