var express   = require('express'),
    app       = express();


app.get('/', function (req, res) {
    res.json({"hello": "World"})
});

app.get('/api/apps', function (req , res){
    res.json({
        "apps": [
            {
              "id": "0032c47b-4a7b-4232-9cc3-6af718244ea8",
              "title": "Best App Ever",
              "description": "A fast paced side scrolling shooter",
              "artAssets": [
                { "title": "Splash Screen", "srcLink": "http://i.imgur.com/5e5Ihb6.jpg" },
                { "title": "Cut Scene", "srcLink": "http://i.imgur.com/QQ3O6PO.jpg" }
              ],
              "releaseDate": "2016-06-15T22:29:20.000Z",
              "createdAt": "2016-05-15T22:29:20.000Z",
              "updatedAt": "2016-05-15T22:29:20.000Z",
              "user": {
                "id": "ae25e5a4-73db-4969-9f6c-acf8246b7faa",
                "name": "Chapman"
              }
            },
            {
              "id": "0032c47b-4a7b-4232-9cc3-6af718244ea8",
              "title": "Best App Ever2",
              "description": "A fast paced side scrolling shooter",
              "artAssets": [
                { "title": "Splash Screen", "srcLink": "http://i.imgur.com/5e5Ihb6.jpg" },
                { "title": "Cut Scene", "srcLink": "http://i.imgur.com/QQ3O6PO.jpg" }
              ],
              "releaseDate": "2016-06-15T22:29:20.000Z",
              "createdAt": "2016-05-15T22:29:20.000Z",
              "updatedAt": "2016-05-15T22:29:20.000Z",
              "user": {
                "id": "ae25e5a4-73db-4969-9f6c-acf8246b7faa",
                "name": "Chapman"
              }
            },
            {
              "id": "0032c47b-4a7b-4232-9cc3-6af718244ea8",
              "title": "Best App Ever3",
              "description": "A fast paced side scrolling shooter",
              "artAssets": [
                { "title": "Splash Screen", "srcLink": "http://i.imgur.com/5e5Ihb6.jpg" },
                { "title": "Cut Scene", "srcLink": "http://i.imgur.com/QQ3O6PO.jpg" }
              ],
              "releaseDate": "2016-06-15T22:29:20.000Z",
              "createdAt": "2016-05-15T22:29:20.000Z",
              "updatedAt": "2016-05-15T22:29:20.000Z",
              "user": {
                "id": "ae25e5a4-73db-4969-9f6c-acf8246b7faa",
                "name": "Chapman"
              }
            }
        ]
    })
})


app.get('/api/apps/1', function (req , res){
  res.json({
      "id": "0032c47b-4a7b-4232-9cc3-6af718244ea8",
      "title": "Best App Ever3",
      "description": "A fast paced side scrolling shooter",
      "artAssets": [
        { "title": "Splash Screen", "srcLink": "http://i.imgur.com/5e5Ihb6.jpg" },
        { "title": "Cut Scene", "srcLink": "http://i.imgur.com/QQ3O6PO.jpg" }
      ],
      "releaseDate": "2016-06-15T22:29:20.000Z",
      "createdAt": "2016-05-15T22:29:20.000Z",
      "updatedAt": "2016-05-15T22:29:20.000Z",
      "user": {
        "id": "ae25e5a4-73db-4969-9f6c-acf8246b7faa",
        "name": "Chapman"
      }
    })
})

app.get('/api/users', function (req , res){
  res.json({
    "user": [
      {
        "id": "ae25e5a4-73db-4969-9f6c-acf8246b7faa",
        "name": "Chapman"
      },
      {
        "id": "ae25e5a4-73db-4969-9f6c-acf8246b7faa",
        "name": "Kevin"
      },
      {
        "id": "ae25e5a4-73db-4969-9f6c-acf8246b7faa",
        "name": "Daniel"
      },
      {
        "id": "ae25e5a4-73db-4969-9f6c-acf8246b7faa",
        "name": "Krysler"
      }
    ]
  })
})

app.get('/api/users/1', function (req , res){
  res.json({
    "user":
      {
        "id": "ae25e5a4-73db-4969-9f6c-acf8246b7faa",
        "name": "Chapman"
      }
  })
})


var port = process.env.PORT || 3000;
app.listen(port);
console.log('app is running on port:', port);
console.log('Gulp Is Awesome');

