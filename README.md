# backend
Backend Repo

## PVD
https://docs.google.com/document/d/1gjTcs1Fnqjfe6XmExHJFOxIFzaHIYapmeliqLi7fKPw/edit#


# Back-End

## Schema

#### Users

| Field    | Type    | Notes                               |
| -------- | ------- | ----------------------------------- |
| id        | integer | _primary key_ and _autoincrements_ |
| email     | string  | _required_ and _unique_            |
| password  | string  | _required_                         |
| username  | string  | _required_                         |
| firstName | string  | _required_                         |
| lastName  | string  | _required_                         |

#### Items_List

| Field        | Type    | Notes                              |
| ------------ | ------- | ---------------------------------- |
| id           | integer | _primary key_ and _autoincrements_ |
| users_id     | integer | _required_ and _forgein key_       |
| name         | integer | _required_                         |
| location     | integer | _required_                         |
| description  | integer | _required_                         |
| price        | integer | _required_                         |


## API

BASE URL: 
test account:

```json
{
  "username": "testuser",
  "password": "Lambda",
  "email": "testuser@email.com",
  "firstName": "Jane",
  "lastName": "Doe"
}
```

#### Table of Contents

| Type   | Path                            | Notes                           |
| ------ | ------------------------------- | ------------------------------- |
| POST    | `/auth/register`               | register a new user             |
| POST    | `/auth/login`                  | login an existing user          |
| POST    | `/items`                       | add new user                    |
| GET     | `/items`                       | list items                      |
| PUT     | `/auth/items/:id`              | update item                     |
| PUT     | `/auth/user/:username`         | Update username                 |
| GET     | `/items/:location`             | Get items by location           |
| DELETE  | `/items/:id`                   | remove items                    |
| DELETE  | `/auth/users/:id`              | Delete user                     |


## Examples

#### POST /auth/register

request data:

```json
{
  "email": "testuser@email.com",
  "password": "Lambda",
  "username": "testuser",
  "firstName": "Jane",
  "lastName": "Doe"
}
```

response data:

```json
{
  "message": "Registration successful",
  "user": {
    "id": 1,
    "email": "testuser@email.com",
    "username": "testuser",
    "fistName": "Jane",
    "lastName": "Doe"
  },
  "authorization": "really.long.token"
}
```

#### POST /auth/login

request data:

```json
{
  "username": "testuser",
  "password": "Lambda"
}
```

response data:

```json
{
  "user": {
    "id": 1,
    "email": "testuser@email.com",
    "username": "testuser"
  },
  "authorization": "really.long.token"
}
```

#### POST /items

request data:

```json
{
  "user_id": 1,
  "name": "Baskets",
  "location": "USA",
  "description": "Hand woven baskets",
  "price": "$15"
}
```

response data:

```json
{
  "message": "You just created a new idem, testuser ",
  "recommendations": [
    {
      "id": 1
    }
  ]
}
```

#### PUT /auth/user/:username

(include auth token in headers)
request data:

```json
{
  "password": "newPassword"
}
```

response data:

```json
{
  "message": "YOU JUST UPDATED YOUR PASSWORD, ${user}, GOOD JOB!",
  "pwres": "int"
}
```

