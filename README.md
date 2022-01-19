# RESTAPI - Node (Express JS / MongoDB)

## USING THE FOLLOWING 
1. NODE JS 
2. MongoDB (NoSQL)
3. CRUD Method

## DEPENDENCIES
1. express - for application, equivalent to NodeJS.
2. mongooes - to interact with mongodb.
3. dotenv - for DEV env ONLY - is to pull the variables into .env file and nodemon will refresh.
4. nodemon - to do refresh on the server everytime theres any changes on development.


## FOLLOWING COMMAND:
1. npm i express mongoose -use for development.
2. npm i --save-dev dotenv nodemon -use for development.
3. devStart - configured to package.json to run "nodemon server.js".


## MAIN FILES AND FOLDER:
1. .env - for configuration for the server.
2. .gitignore - ignores the following files to upload into the repository.
3. server.js - the main js to RUN for this project command to trigger "npm run devStart", after trigger must able to see the word text '.Server Started' & 'Connected to Database'.
4. routes folder - for all the collection list integrate to any NoSQL (1 collection equivalent to route file that contains REST methods).
5. routes > users.js - REST Methods to trigger the following (GET, POST, PATCH, DELETE)
6. models folder - for all the schema models listed all the data type and parameters as required.
7. models > user.js - contains schema or the blueprint, to interact with the DB easy way.


## TESTING ROUTE USING REST CLIENT
1. install extension name "REST CLIENT"
2. created file "route.rest" to see the list of test request.
3. send request lines to test, using "route.rest" (e.g) GET http://localhost:3000/users click 'send request' word. Take note that you must be connected to database. Sample test see section "INPUTS / OUTPUTS".

## DATA BASE - MONGODB (Cloud Atlas)
### URL : https://cloud.mongodb.com/
1. Create account is required.
2. Build your Cluster.
3. Add your IP Addres to Access list.
4. Load Sample Data. 
5. Connect to Cluster
6. Following has been created:
    - Cluster Name: xxxxxxxx
    - Database Name: sample_users
    - Collection Name: users
    - IP Address: xxxxx (I only assign my IP Address to connect into this Cluster / Database)

## REFERENCE
- HTTP Response Codes link
https://developer.mozilla.org/en-US/docs/Web/HTTP/Status


## INPUTS / OUTPUTS (Sample Request and Response)
- GET ALL
    - Description: To get all users to the Database / collection users.
    - HTTP Method: GET
    - Request: GET http://localhost:3000/users
    - Response:  
        [
            {
                "_id": "xxxxxxxxxxxx",
                "name": "xxxxxx",
                "dob": "1987-07-25T16:00:00.000Z",
                "address": "xxxxxxx",
                "description": "xxxxxxxxxx",
                "createdAt": "2021-08-28T13:33:25.138Z",
                "__v": 0
            },
            {
                "_id": "xxxxxxxxxxxx",
                "name": "xxxxxx",
                "dob": "1987-07-25T16:00:00.000Z",
                "address": "xxxxxxx",
                "description": "xxxxxxxxxx",
                "createdAt": "2021-08-28T13:33:25.138Z",
                "__v": 0
            },
            ...
        ]

- GET ONE
    - Description: To get specific user record to the Database / collection users.
    - HTTP Method: GET
    - Request: GET http://localhost:3000/users/<id>
    - Response:  
        {
            "_id": "xxxxxxxxxxxx",
            "name": "xxxxxx",
            "dob": "1987-07-25T16:00:00.000Z",
            "address": "xxxxxxx",
            "description": "xxxxxxxxxx",
            "createdAt": "2021-08-28T13:33:25.138Z",
            "__v": 0
        }

- CREATE 
    - Description: To create user record to the Database / collection users.
    - HTTP Method: POST
    - Request: POST http://localhost:3000/users
    - Content-Type: application/json
    - Request Body:
        {
            "name": "newPerson", 
            "dob": "July 1, 1991",
            "address": "xxxxxxx",
            "description": "Testing POST method to create record."
        }

    - Response:  
        {
            "name": "newPerson",
            "dob": "1991-06-30T16:00:00.000Z",
            "address": "xxxxxxx",
            "description": "Testing POST request - Saravillo",
            "_id": "xxxxxxxxxxxxxxxx",
            "createdAt": "2021-08-29T07:10:46.885Z",
            "__v": 0
        }

- DELETE
    - Description: To delete user record to the Database / collection users.
    - HTTP Method: DELETE
    - Request: DELETE http://localhost:3000/users/<id>
    - Reponse:
        {
            "message": "Deleted User."
        }

- UPDATE
    - Description: To update/patch a record to the Database / collection users
    - HTTP Method: PATCH
    - Request: PATCH http://localhost:3000/users/<id>
    - Content-Type: application/json
    - Request Body:
        {
            "name": "Hello", 
            "dob": "July 2, 1990",
            "address": "BLK 1234",
            "description": "Testing, to update information through Patch method."
        }

    - Response:
        {
            "_id": "xxxxxxxxxx",
            "name": "Hello",
            "dob": "1990-07-01T16:00:00.000Z",
            "address": "BLK 1234",
            "description": "Testing, to update information through Patch method.",
            "createdAt": "2021-08-28T14:11:59.660Z",
            "__v": 0
        }
 


AUTHOR: Sonny