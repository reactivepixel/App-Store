var express   = require('express'),
    body_parser = require('body-parser'),
    app       = express();

// When Url starts with api, got to the routes/api and grab routes.
app.use("/api", require('./routes/api.js')(express));

// Root response
app.get('/', function (req, res) {
    res.json({"hello": "World"})
})

var port = 3000;

var server = app.listen(port, function() {
  console.log('app is running on port:', port);
});

// This will allow the test to require the server
module.exports = server;