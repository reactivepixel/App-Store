# App-Store

## Endpoints and response
***

## CRUD for Users
* Create a User
* Display User based upon id
* Display all Users
* Update User based upon id
* Delete User based upon id

## CRUD for Apps
* Create an App
* Display App based upon id
* Display all App from specific userId
* Display all Apps
* Update User based upon id
* Update App UserId

## ArtAssets to Apps
* Create artassets
* Display all artassets upon app id
* Display one artassets from specific app id and artassetid
* Update artassets based upon id


---

### CRUD for Users
--=-=-=-=-=-=-=-=-

#### POST -==- Create User
```
/api/users/
```
##### Sample
```
{
    "name": "Kevin",
}
```
---

#### GET -==- User with Id of 1
```
/api/users/1
```
##### Sample Response
```
{
  "id": 1,
  "name": "Kevin Tucker",
  "createdAt": "2016-06-08T01:11:52.000Z",
  "updatedAt": "2016-06-08T01:11:52.000Z"
}
```
---

#### GET -==- All Users
```
/api/users/
```
##### Sample Response
```
[
  {
    "id": 1,
    "name": "Kevin",
    "createdAt": "2016-06-08T01:35:43.000Z",
    "updatedAt": "2016-06-08T01:35:43.000Z"
  },
  {
    "id": 2,
    "name": "Kevin",
    "createdAt": "2016-06-08T01:35:47.000Z",
    "updatedAt": "2016-06-08T01:35:47.000Z"
  },
  {
    "id": 3,
    "name": "Kevin",
    "createdAt": "2016-06-08T01:35:48.000Z",
    "updatedAt": "2016-06-08T01:35:48.000Z"
  }
]
```
---

#### POST -==- Update User
```
/api/users/1
```
##### Sample
```
{
  "name": "Kevin T"
}
```
---

#### DELETE -==- User
```
/api/users/1
```
##### Response
```
1
```
---



### CRUD for Apps
-=-=-=-=-=-=-=-=-

#### POST -==- Create App
```
/api/apps
```
##### Sample
```
{
    "title": "Best routes Ever",
    "description": "A fast paced side scrolling shooter",
    "releaseDate": "2016-06-15T22:29:20.000Z"
}
```
---

#### GET -==- App with Id of 1
```
/api/apps/1
```
##### Sample Response
```
{
  "id": 1,
  "title": "Best routes Ever",
  "description": "A fast paced side scrolling shooter",
  "releaseDate": "2016-06-15T22:29:20.000Z",
  "createdAt": "2016-06-08T01:12:36.000Z",
  "updatedAt": "2016-06-08T01:12:36.000Z",
  "userId": 1,
  "artAssets": [
    {
      "id": 1,
      "title": "Best router Ever",
      "srcLink": "Kevin",
      "createdAt": "2016-06-08T01:16:11.000Z",
      "updatedAt": "2016-06-08T01:16:11.000Z",
      "appId": 1
    }
  ]
}
```
---

#### Get -==- App by user id
```
/api/users/1/apps
```
##### Sample Response
```
[
  {
    "id": 1,
    "title": "Best routes Ever Ever",
    "description": "A fast paced side scrolling shooter",
    "releaseDate": "2016-06-15T22:29:20.000Z",
    "createdAt": "2016-06-08T01:35:54.000Z",
    "updatedAt": "2016-06-08T01:44:12.000Z",
    "userId": 1,
    "artAssets": [
      {
        "id": 1,
        "title": "Best router Ever",
        "srcLink": "Kevin",
        "createdAt": "2016-06-08T01:36:16.000Z",
        "updatedAt": "2016-06-08T01:36:16.000Z",
        "appId": 1
      },
      {
        "id": 2,
        "title": "Best router Ever",
        "srcLink": "Kevin",
        "createdAt": "2016-06-08T01:36:20.000Z",
        "updatedAt": "2016-06-08T01:36:20.000Z",
        "appId": 1
      },
      {
        "id": 3,
        "title": "Best router Ever",
        "srcLink": "Kevin",
        "createdAt": "2016-06-08T01:36:25.000Z",
        "updatedAt": "2016-06-08T01:36:25.000Z",
        "appId": 1
      }
    ]
  }
]
```

---

#### GET -==- All Apps
```
/api/apps/
```
##### Sample Response
```
[
  {
    "id": 1,
    "title": "Best routessdfsdfsdfr Ever",
    "description": "A fast paced side scrolling shooter",
    "releaseDate": "2016-06-15T22:29:20.000Z",
    "createdAt": "2016-06-08T01:35:54.000Z",
    "updatedAt": "2016-06-08T01:35:54.000Z",
    "userId": null
  },
  {
    "id": 2,
    "title": "Best routessdfsdfsdfr Ever",
    "description": "A fast paced side scrolling shooter",
    "releaseDate": "2016-06-15T22:29:20.000Z",
    "createdAt": "2016-06-08T01:35:55.000Z",
    "updatedAt": "2016-06-08T01:35:55.000Z",
    "userId": null
  }
]
```
---

#### POST -==- Update App
```
/api/apps/1
```
##### Sample
```
{
    "title": "Best routes Ever Ever",
    "description": "A fast paced side scrolling shooter",
    "releaseDate": "2016-06-15T22:29:20.000Z",
    "userId": 1
}
```
---

#### POST -==- Update App UserId
```
/api/apps/1
```
##### Sample
```
{
    "title": "Best routes Ever Ever",
    "description": "A fast paced side scrolling shooter",
    "releaseDate": "2016-06-15T22:29:20.000Z",
    "userId": 2
}
```
---


## ArtAssets to Apps

#### POST -==- Create artassets
```
/api/apps/1/artAssets/
```
##### Sample
```
{
    "title": "Best router Ever",
    "srcLink": "Kevin",
    "appId": 1
}
```
---

#### GET -==- All artassets upon app id
```
/api/apps/1/artAssets/
```
##### Sample
```
[
  {
    "id": 1,
    "title": "Best router Ever",
    "srcLink": "Kevin",
    "createdAt": "2016-06-08T01:36:16.000Z",
    "updatedAt": "2016-06-08T02:33:50.000Z",
    "appId": 1
  },
  {
    "id": 2,
    "title": "Best router Ever",
    "srcLink": "Kevin",
    "createdAt": "2016-06-08T01:36:20.000Z",
    "updatedAt": "2016-06-08T01:36:20.000Z",
    "appId": 1
  }
]
```
---

#### GET -==- Display one artassets from specific app id and artassetid
```
/api/apps/1/artAssets/2
```
##### Sample Response
```
{
  "id": 2,
  "title": "Best router Ever",
  "srcLink": "Kevin",
  "createdAt": "2016-06-08T01:36:20.000Z",
  "updatedAt": "2016-06-08T01:36:20.000Z",
  "appId": 1
}
```
---

#### POST -==- Update artassets based upon id
```
/api/apps/1/artAssets/2
```
##### Sample
```
{
  "id": 2,
  "title": "Best router Ever",
  "srcLink": "Kevin",
  "createdAt": "2016-06-08T01:36:20.000Z",
  "updatedAt": "2016-06-08T01:36:20.000Z",
  "appId": 2
}
```
---
