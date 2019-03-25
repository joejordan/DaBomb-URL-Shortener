// The GraphQL schema
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    "A simple type for getting started!"
    hello: String
  }

  type ShortUrl {
    longurl: String!
    shortId: String!
  }

  type User {
    id: ID!
    email: String!
    password: String!
  }
`;

module.exports = typeDefs;
