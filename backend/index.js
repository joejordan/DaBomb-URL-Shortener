const express = require('express');
const bodyParser = require('body-parser');

// Load up app global config
require('dotenv').config();

// Create new Apollo Server
const apollo = require('./createServer');

// Create an express instance
const app = express();

// Tell Apollo to use our express instance
apollo.applyMiddleware({ app });

console.log()

// configure express app to use bodyParser
// this will let us get data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('💣DaBomb💣 URL Shortener backend!');
});

app.listen(process.env.PORT, () =>
  console.log(
    `Server listening at http://localhost:${process.env.PORT}\n
    GraphQLPlayground available at http://localhost:${process.env.PORT}${apollo.graphqlPath}`
  )
);
