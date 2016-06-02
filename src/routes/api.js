module.exports = function(express) {
  var router = express.Router();

// -=-=-=-=- Get All Apps -=-=-=-=-
// -=-=-=-=--=-=-=-=--=-=-=-=--=-=
  router.get('/apps/', function (req , res){
      res.json({
          "apps": [
              {
                "id": "0032c47b-4a7b-4232-9cc3-6af718244ea8",
                "title": "Best router Ever",
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
                "title": "Best router Ever2",
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
                "title": "Best router Ever3",
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

// -=-=-=-=- Get All Users -=-=-=-=-
// -=-=-=-=--=-=-=-=--=-=-=-=--=-=
  router.get('/users', function (req , res){
    res.json({
      "user": [
        {
          "id": "1",
          "name": "Chapman"
        },
        {
          "id": "2",
          "name": "Kevin"
        },
        {
          "id": "3",
          "name": "Daniel"
        },
        {
          "id": "4",
          "name": "Krysler"
        }
      ]
    })
  })


// -=-=-=-=- Accept an id for User -=-=-=-=-
// -=-=-=-=--=-=-=-=--=-=-=-=--=-=-=-=-=-=-=-
// Will use this for querying the database for that users Id
  router.get('/users/:id', function (req , res){
    res.json({"users": [{"id": req.params.id}]});
  })

// -=-=-=-=- Accept an id for Apps -=-=-=-=-
// -=-=-=-=--=-=-=-=--=-=-=-=--=-=-=-=-=-=-=-
// Will use this for querying the database for that apps Id
  router.get('/apps/:id', function (req , res){
    res.json({"apps": [{"id": req.params.id}]});
  })

  return router
}



