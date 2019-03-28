const express = require('express');
const bodyParser = require('body-parser');
const HashURL = require('./lib/hash');

// Load up app global config
require('dotenv').config();

// Create new Apollo Server
const apollo = require('./createServer');

// Create an express instance
const app = express();

// Tell Apollo to use our express instance
apollo.applyMiddleware({ app });

// configure express app to use bodyParser
// this will let us get data from a POST
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

console.log(HashURL('https://goooooogle.com/'));

app.get('/', (req, res) => {
  res.send('💣DaBomb💣 URL Shortener backend!');
});

app.get('/api/v1/shorten', async (req, res) => {
  console.log(`Your POST:${req.body.post} `);
  res.send('URL Shortened!');
});
app.post('/api/v1/shorten', async (req, res) => {
  console.log(`Your POST:${req.body.post} `);
  res.send('URL Shortened!');
});

app.listen(process.env.PORT, () =>
  console.log(
    `Server listening at http://localhost:${process.env.PORT}\n
    GraphQLPlayground available at http://localhost:${process.env.PORT}${apollo.graphqlPath}`
  )
);
