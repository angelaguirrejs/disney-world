# Disney World API

This project is an API that provides endpoints to manag the following resources:
- movies.
- characters.
- genders.

## Documentation

If you want to see the documentation, [click here](https://documenter.getpostman.com/view/22799952/VUqoQJGs).

## Installation

Clone the project and then open a terminal an run the next command:

```
$ npm install
```

Before using you must set values for some env variables and you can find them in the file called **env**. You must set the port for the app, a secret key for working with JWT, the database configuration to store and get information and finally you can set information to send weolcome emails.

## General information

In order to use it you must get a token and you can get it by auth. When you register you'll receive an email with welcome message and the **bearer token** as response.

## Commands

Run the server for development.

```
$ npm run dev 
```

Run de server for production.

```
$ npm run start
```

Run migrations.

```
$ npm run migrate
```

Make a migration.

```
$ npm run migrations:generate {name of the migration}
```

Undo last migration.

```
$ npm run migrate:undo
```
