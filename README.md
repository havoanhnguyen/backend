<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Description

Auth Service allow user login, register and get list user

## Installation

```bash
$ npm install
```

## Before starting
1. Prepare the internal infrastructure environment in [README](./infrastructure/README.md)

2. Init dependency
```bash
$ npm install
```
3. Create .env in root path to define environment variable, see [env-example](.env-example)

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

## Swagger API interface
```
${APP_URL}/api
```
