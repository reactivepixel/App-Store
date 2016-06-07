# App-Store

## Endpoints and response
***

#### Get app with Id of 1
```
/api/apps/1
```
##### Response
```
{
  "id": 1,
  "title": "Best router Ever",
  "description": "A fast paced side scrolling shooter",
  "releaseDate": "2016-06-15T22:29:20.000Z",
  "createdAt": "2016-06-07T02:37:43.000Z",
  "updatedAt": "2016-06-07T02:37:43.000Z",
  "artAssets": [
    {
      "id": 1,
      "title": "Best router Ever",
      "srcLink": "Kevin",
      "createdAt": "2016-06-07T02:37:55.000Z",
      "updatedAt": "2016-06-07T02:37:55.000Z",
      "appId": 1
    }
  ],
  "user": {
    "id": 1,
    "name": "Kevin",
    "createdAt": "2016-06-07T02:37:52.000Z",
    "updatedAt": "2016-06-07T02:37:52.000Z",
    "appId": 1
  }
}
```
---

#### Get User with Id of 1
```
/api/users/1
```
##### Response
```
{
  "id": 1,
  "name": "Kevin",
  "createdAt": "2016-06-07T02:37:52.000Z",
  "updatedAt": "2016-06-07T02:37:52.000Z",
  "appId": 1
}
```
---

#### Get All Users
```
/api/users/
```
##### Response
```
[
  {
    "id": 1,
    "name": "Kevin",
    "createdAt": "2016-06-07T02:37:52.000Z",
    "updatedAt": "2016-06-07T02:37:52.000Z",
    "appId": 1
  },
  {
    "id": 2,
    "name": "Kevin",
    "createdAt": "2016-06-07T02:57:28.000Z",
    "updatedAt": "2016-06-07T02:57:28.000Z",
    "appId": 2
  }
]
```
---

#### Get All Apps
```
/api/apps/
```
##### Response
```
[
  {
    "id": 1,
    "title": "Best router Ever",
    "description": "A fast paced side scrolling shooter",
    "releaseDate": "2016-06-15T22:29:20.000Z",
    "createdAt": "2016-06-07T02:37:43.000Z",
    "updatedAt": "2016-06-07T02:37:43.000Z"
  },
  {
    "id": 2,
    "title": "Best routessdfsdfsdfr Ever",
    "description": "A fast paced side scrolling shooter",
    "releaseDate": "2016-06-15T22:29:20.000Z",
    "createdAt": "2016-06-07T02:49:32.000Z",
    "updatedAt": "2016-06-07T02:49:32.000Z"
  },
  {
    "id": 3,
    "title": "Best rsdfsdfouter Ever",
    "description": "A fast paced side scrolling shooter",
    "releaseDate": "2016-06-15T22:29:20.000Z",
    "createdAt": "2016-06-07T02:57:07.000Z",
    "updatedAt": "2016-06-07T02:57:07.000Z"
  }
]
```
---

#### Create User
```
/api/users/
```
##### Post
```
{
    "name": "Kevin",
    "appId": 2
}
```
---


#### Update User
```
/api/users/1
```
##### Post
```
{
  "id": 1,
  "name": "Kevin",
  "createdAt": "2016-06-07T02:37:52.000Z",
  "updatedAt": "2016-06-07T02:37:52.000Z",
  "appId": 1
}
```
---

#### Delete User
```
/api/users/1
```
##### DELETE Response
```
1
```
---

#### Create App
```
/api/apps
```
##### POST
```
{
    "title": "Best rsdfsdfouter Ever",
    "description": "A fast paced side scrolling shooter",
    "releaseDate": "2016-06-15T22:29:20.000Z"
}
```
---


#### Get One App
```
/api/apps/1
```
##### GET Response
```
{
  "id": 1,
  "title": "Best router Ever",
  "description": "A fast paced side scrolling shooter",
  "releaseDate": "2016-06-15T22:29:20.000Z",
  "createdAt": "2016-06-07T02:37:43.000Z",
  "updatedAt": "2016-06-07T02:37:43.000Z",
  "artAssets": [
    {
      "id": 1,
      "title": "Best router Ever",
      "srcLink": "Kevin",
      "createdAt": "2016-06-07T02:37:55.000Z",
      "updatedAt": "2016-06-07T02:37:55.000Z",
      "appId": 1
    }
  ],
  "user": {
    "id": 1,
    "name": "Kevin",
    "createdAt": "2016-06-07T02:37:52.000Z",
    "updatedAt": "2016-06-07T02:37:52.000Z",
    "appId": 1
  }
}
```
---

#### Update App
```
/api/apps/1
```
##### POST
```
{
  "id": 1,
  "title": "Kevins App",
  "description": "A fast paced side scrolling shooter",
  "releaseDate": "2016-06-15T22:29:20.000Z",
  "createdAt": "2016-06-07T02:37:43.000Z",
  "updatedAt": "2016-06-07T03:41:55.000Z"
}
```
---

#### Get App by user id -=-=- Not Yet Working
```
/api/apps/users/1
```
##### Get

---
