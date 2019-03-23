// The GraphQL schema
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    "A simple type for getting started!"
    hello: String
  }
`;

module.exports = typeDefs;
