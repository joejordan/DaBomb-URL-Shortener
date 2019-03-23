const express = require('express');

require('dotenv').config();

// Create new Apollo Server
const apollo = require('./createServer');

const app = express();
apollo.applyMiddleware({ app });

app.get('/', (req, res) => {
  res.send('💣DaBomb💣 URL Shortener backend!');
});

app.listen(process.env.PORT, () =>
  console.log(
    `Server listening at http://localhost:${process.env.PORT}\n
    GraphQLPlayground available at http://localhost:${process.env.PORT}${apollo.graphqlPath}`
  )
);
