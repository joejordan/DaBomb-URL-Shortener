// The GraphQL schema
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    "A simple type for getting started!"
    hello: String
  }

  type ShortUrl {
    longUrl: String!
    longurlHash: String!
    shortUrl: String!
    userId: String!
    creationDate: String! # TODO: use custom date scalar here
  }

  type User {
    id: ID!
    email: String!
    passwordHash: String!
  }
`;

module.exports = typeDefs;
