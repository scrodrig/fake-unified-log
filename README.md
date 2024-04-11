<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Description

[Nest](https://github.com/nestjs/nest) Testing framework TypeScript starter repository.

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

Nest is [MIT licensed](LICENSE).



# Controllers

## UsersController

This controller handles all operations related to users.

### Endpoints

- `GET /users`: Returns a list of all users.
- `GET /users/:id`: Returns a specific user by ID.
- `POST /users`: Creates a new user. Requires a JSON body with `name`, `email`, and `password`.
- `PUT /users/:id`: Updates a specific user. Requires a JSON body with the fields to be updated.
- `DELETE /users/:id`: Deletes a specific user.

## PostsController

This controller handles all operations related to posts.

### Endpoints

- `GET /posts`: Returns a list of all posts.
- `GET /posts/:id`: Returns a specific post by ID.
- `POST /posts`: Creates a new post. Requires a JSON body with `title`, `content`, and `userId`.
- `PUT /posts/:id`: Updates a specific post. Requires a JSON body with the fields to be updated.
- `DELETE /posts/:id`: Deletes a specific post.