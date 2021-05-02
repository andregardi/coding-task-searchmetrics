# Searchmetrics Coding Task – Keyword Manager 

## Overview
The goal of this task is to create a React application to manage and categorize search keywords. 

## Tech Stask
Fullstack code challenge using:
### Back-end
- Node.js
- GraphQL with Apollo Server
- Jest for testing
### Front-end
- React
- Hooks
- Apollo Client

## Running locally
### Back-end
- Open the `./api` folder on terminal.
- Run `npm install`
- Run `npm start`
This will start the server on  http://localhost:4000
### Front-end
The back-end server is required to use the webclient.
- Open the `./frontend` folder on terminal.
- Run `npm install`
- Run `npm start`
This will start the webclient on  http://localhost:3000

## Deploying on production
This application is not prodution ready!
It could be fixed in a few steps:
### Back-end
- Add a script to start the server without nodemon.
### Front-end
- Refactor the, `REACT_APP_GRAPHQL_SERVER_URL` used by the appollo client to load the server url from a env variable.
- Setup [cross-env](https://www.npmjs.com/package/cross-env) or [dotenv](https://www.npmjs.com/package/dotenv) to manage `GRAPHQL_SERVER_URL` locally.
- Run `npm build`. `REACT_APP_GRAPHQL_SERVER_URL` is transpiled during the build time. Changing the server URL requires a new buils.
- Copy the content of `./build` folder and serve it as a static artefact on your CI.

See the section about [React Deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## To do
What could have been done better, given more time:
- Use some database to persist the categories and keyword when shuting down the backend server.
- Add unit tests on the front-end with `jest` and integration tests with `@testing-library/react`, already set up on `create-react-app`.
- Use styled-components lib on the front-end.
- Improve the UX with loading animations when creating categories and keywords.
- Improve the UX when getting an error from the API.
