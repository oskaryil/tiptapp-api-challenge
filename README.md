# tiptapp-api-challenge

Tiptapp api coding challenge

## Setup

### Prerequisities

- MongoDB Server
- Node.js > v.6

Make a copy of the `.env.example` file and rename it to `.env`. Fill this file with your own environment variables.

Here's an example:

```
PORT=4000
MONGO_URL_DEV=mongodb://localhost/tiptapp-todo-api
```

### Install depencendies

Run `$ npm install`

### Start the server

Run `$ npm start`

## API

There are two different groups of endpoints:

- Todo @ `/api/todo`
- Events @ `/api/events`

### Todo

#### Create Todo `/api/todo`

```bash
curl --request POST \
  --url http://localhost:3000/api/todo \
  --header 'content-type: application/x-www-form-urlencoded' \
  --data title=Buy%20groceries
```

#### Delete Todo `/api/todo/:id`

```bash
curl --request DELETE \
  --url http://localhost:3000/api/todo/5b3b2d14fbfa2a6fd938e0f2
```

#### Update Todo `/api/todo/:id`

```bash
curl --request PATCH \
  --url http://localhost:3000/api/todo/5b3b2f6d98b4658664291426 \
  --header 'content-type: application/x-www-form-urlencoded' \
  --data done=true
```

#### Fetch all todos `/api/todo`

```bash
curl --request GET \
  --url http://localhost:3000/api/todo
```

### Events

#### Fetch all events `/api/events`

```bash
curl --request GET \
  --url http://localhost:3000/api/events
```

#### Fetch events based on event name/type `/api/events/name`

```bash
curl --request GET \
  --url http://localhost:3000/api/events/marked_as_done
```
