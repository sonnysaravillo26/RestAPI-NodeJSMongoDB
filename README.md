# RESTAPI - Node (Express JS / MongoDB)
# RYDE 

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
3. server.js - the main js to RUN for this project command to trigger "npm run devStart"
4. routes folder - for all the collection list integrate to any NoSQL (1 collection equivalent to route file that contains REST methods).
5. routes > users.js - REST Methods to trigger the following (GET, POST, PATCH, DELETE)
6. models folder - for all the schema models listed all the data type and parameters as required.
7. models > user.js - contains schema or the blueprint, to interact with the DB easy way.


## TESTING ROUTE USING REST CLIENT
1. install extension name "REST CLIENT"
2. created file 'route.rest' to see the list of test request.
3. send request lines to test
(e.g) GET http://localhost:3000/users - click send request word (note: you must be connected to database)

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


Author: sonny