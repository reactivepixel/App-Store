# App-Store

## Endpoints and response
***

#### Get app with Id of 1
```
http://localhost:3000/api/apps/1
```
##### Response
```
{
    "apps": [
        {
            "id": "1"
        }
    ]
}
```
---

#### Get User with Id of 1
```
http://localhost:3000/api/users/1
```
##### Response
```
{
    "users": [
        {
            "id": "1"
        }
    ]
}
```
---

#### Get All Users
```
http://localhost:3000/api/users/
```
##### Response
```
{
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
}
```
---

#### Get All Apps
```
http://localhost:3000/api/apps/
```
##### Response
```
{
    "apps": [
        {
            "id": "0032c47b-4a7b-4232-9cc3-6af718244ea8",
            "title": "Best router Ever",
            "description": "A fast paced side scrolling shooter",
            "artAssets": [
            {
                "title": "Splash Screen",
                "srcLink": "http://i.imgur.com/5e5Ihb6.jpg"
            },
            {
                "title": "Cut Scene",
                "srcLink": "http://i.imgur.com/QQ3O6PO.jpg"
            }
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
                {
                    "title": "Splash Screen",
                    "srcLink": "http://i.imgur.com/5e5Ihb6.jpg"
                },
                {
                    "title": "Cut Scene",
                    "srcLink": "http://i.imgur.com/QQ3O6PO.jpg"
                }
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
}
```
---



