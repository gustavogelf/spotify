# Spotify APP

Small app to connect with spotify API.

## Prerequisites

Before running the project, make sure you have the correct version on node, listed on the `package.json` to support the ES6 features in the project.

### Start Mongo Service
`sudo service mongod start`

## Run the project

Once inside the project folder take the following steps to run the project.

### Run NPM or Yarn Install
`yarn install` or `npm install`

### Set the Enviroment Variables

To keep the credentials safe, this are not stored in the repo, they are pulled from enviroment variables, you will have to set the following variables:

1. `CLIENT_ID`
2. `CLIENT_SECRET`

### Run the Project
After the project is installed you have to run `npm run start` this will compile the project the default url for the project is `http://localhost:5000/`.

### Linting

Front End `npm run lint`
Back End `npm run eslint`
