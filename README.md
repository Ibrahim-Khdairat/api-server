
# Lab 04 -  Api-Serve

##### Author : Ibrahim Khdairat 

* [GitHub Repo Link](https://github.com/Ibrahim-Khdairat/api-server)

* [Pull Request](https://github.com/Ibrahim-Khdairat/api-server/pull/1)

* [Heroku Link](https://ibrahim-api-server.herokuapp.com/) : https://ibrahim-api-server.herokuapp.com/


##### Setup
`.env` requirements
  * `PORT` - Port Number

**Running the app**
* `npm start`
* Endpoints:
* ##### 1 -  `/status`
https://ibrahim-api-server.herokuapp.com/status
Returns Object

>{
  "domain": "ibrahim-api-server.herokuapp.com",
  "status": "running",
  "port": 3000
}

* ##### 2 -  `food`  
https://ibrahim-api-server.herokuapp.com/food


Returns Object

>[{
"id": 1,
"foodName": "Shawarma",
"foodSize": "Large",
"customerId": 1,
"createdAt": "2021-08-18T19:11:58.367Z",
"updatedAt": "2021-08-18T19:11:58.367Z"
},
{
"id": 2,
"foodName": "Mansaf",
"foodSize": "Large",
"customerId": 1,
"createdAt": "2021-08-18T19:12:34.336Z",
"updatedAt": "2021-08-18T19:12:34.336Z"
}]

* ##### 3 -  `custmer`  
https://ibrahim-api-server.herokuapp.com/custmer


Returns Object as example : 

>{
  "id": 1,
  "customerName": "Ibrahim",
  "createdAt": "2021-08-18T18:52:34.615Z",
  "updatedAt": "2021-08-18T18:52:34.615Z"

}

**Tests**
* Unit Tests: `npm run test`


