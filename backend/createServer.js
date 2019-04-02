const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./schema-graphql');
const Query = require('./resolvers/Query');

const resolvers = {
  Query,
};

const apollo = new ApolloServer({ typeDefs, resolvers });

module.exports = apollo;
