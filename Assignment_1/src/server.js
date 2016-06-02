var express   = require('express'),
    app       = express();


app.get('/', function (req, res) {
    res.render('home');
    res.json({"hello": "World"})
});

app.get('/api/static', function (req , res){
    res.json({
        "Hello": true,
    })
})

var port = process.env.PORT || 3000;
app.listen(port);
console.log('app is running on port:', port);
console.log('Gulp Is Awesome');