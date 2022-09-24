

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

Crud api end point 
Create api: 
end point: http://localhost:5001/api/temperature
Request body: 
json: {
    "temperature": 30,
    "humidity": 30,
    "occupancy": false
}

Get single Item api: 
Request method: GET
Api end point:  http://localhost:5001/api/temperature/3

Get all Item api: 
Request method: GET
API end point : http://localhost:5001/api/temperature

Update an item Api: 
API end point http://localhost:5001/api/temperature/3
Request method: PATCH
request body:
json: {
    "temperature": 30,
    "humidity": 30,
    "occupancy": false
}

Delete api end point http://localhost:5001/api/temperature/3
Request method: DELETE
