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

| Type   | Path                                | Notes                           |
| ------ | ----------------------------------- | ------------------------------- |
| POST    | `/api/auth/register`               | register a new user             |
| POST    | `/api/auth/login`                  | login an existing user          |
| POST    | `/api/categorys`                   | add new category                |
| POST    | `/api/items`                       | add new item                    |
| GET     | `/api/users`                       | list users                      |
| GET     | `/api/categorys`                   | Get categorys                   |
| GET     | `/api/items`                       | list items                      |
| GET     | `/items/:category   `              | Get items by category           |
| PUT     | `/auth/items/:name`                | update item                     |
| PUT     | `/auth/user/:username`             | Update username                 |
| DELETE  | `/items/:name`                     | remove items                    |
| DELETE  | `/auth/users/:username`            | Delete user                     |


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
    "user_id": 1,
    "username": "testuser",
    "token": "The long token will be shown here"
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
    "user_id": 1,
    "username": "testuser",
    "token": "The long token will be shown here"
}
```
#### POST /api/categorys

request data:

```json
{
  "category": "Baskets"
}
```

response data:

```json
{
    "data": [
        1
    ]
}
```
#### POST /api/items

request data:

```json
{
    "category_id": 1,
    "users_id": 1,
    "product": "Small Woven Basket",
    "description": "Hand made wooden Woven Basket",
    "price": "$10.00"
}
```

response data:

```json
{
    "data": [
        1
    ]
}
```

#### GET /api/users

request data:

```json
{
  "username": "testuser",
  "password": "Lambda"
}
```

response data:

```json
[
    {
        "id": 1,
        "email": "testuser@email.com",
        "location": "Africa",
        "username": "testuser",
        "name": "Jane Doe",
        "password": "See Token here"
    }
]
```
#### GET /api/categorys

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
    "data": [
        {
            "id": 1,
            "category": "Baskets"
        }
    ]
}
```
#### GET /api/items

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
    "data": [
        {
            "id": 1,
            "users_id": 1,
            "category_id": 1,
            "product": "Small Woven Basket",
            "description": "Hand made wooden Woven Basket",
            "price": "$10.00"
        }
    ]
}
```