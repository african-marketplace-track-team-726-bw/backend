# backend
Backend Repo

## PVD
https://docs.google.com/document/d/1gjTcs1Fnqjfe6XmExHJFOxIFzaHIYapmeliqLi7fKPw/edit#


# Back-End

## Schema

#### Users

| Field     | Type    | Notes                              |
| --------- | ------- | ---------------------------------- |
| id        | integer | _primary key_ and _autoincrements_ |
| email     | string  | _required_ and _unique_            |
| location  | string  | _required_                         |
| username  | string  | _required_                         |
| name      | string  | _required_                         |

#### Category_List

| Field        | Type    | Notes                              |
| ------------ | ------- | ---------------------------------- |
| id           | integer | _primary key_ and _autoincrements_ |
| category     | string  | _required_                         |

#### Items_List

| Field        | Type    | Notes                              |
| ------------ | ------- | ---------------------------------- |
| id           | integer | _primary key_ and _autoincrements_ |
| users_id     | integer | _required_ and _forgein key_       |
| category_id  | integer | _required_ and _forgein key_       |
| product      | string  | _required_                         |
| description  | string  | _required_                         |
| price        | string  | _required_                         |


## API

BASE URL: https://african-marketplace-trackteam.herokuapp.com/
test account:

```json
{
  "username": "testuser",
  "password": "Lambda",
  "email": "testuser@email.com",
  "name": "Jane Doe",
  "location": "Africa"
}
```

#### Table of Contents

| Type   | Path                            | Notes                           |
| ------ | ------------------------------- | ------------------------------- |
| POST    | `/auth/register`               | register a new user             |
| POST    | `/auth/login`                  | login an existing user          |
| POST    | `/items`                       | add new item                    |
| GET     | `/items`                       | list items                      |
| PUT     | `/auth/items/:name`            | update item                     |
| PUT     | `/auth/user/:username`         | Update username                 |
| GET     | `/items/:category_id`          | Get items by category           |
| DELETE  | `/items/:name`                 | remove items                    |
| DELETE  | `/auth/users/:username`        | Delete user                     |


## Examples

#### POST /auth/register

request data:

```json
{
  "email": "testuser@email.com",
  "password": "Lambda",
  "username": "testuser",
  "name": "Jane Doe",
  "location": "Africa"

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

