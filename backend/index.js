const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

require('dotenv').config();

// The GraphQL schema
const typeDefs = gql`
  type Query {
    "A simple type for getting started!"
    hello: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};

// Create new Apollo Server
const apollo = new ApolloServer({ typeDefs, resolvers });

const app = express();
apollo.applyMiddleware({ app });

app.get('/', (req, res) => {
  res.send('💣DaBomb💣 URL Shortener backend!');
});

console.log(apollo.graphqlPath);

app.listen(process.env.PORT, () =>
  console.log(
    `Server listening at http://localhost:${process.env.PORT}\n
    GraphQLPlayground available at http://localhost:${process.env.PORT}${apollo.graphqlPath}`
  )
);
